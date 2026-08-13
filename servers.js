// Loads the Tested Minecraft Servers table from servers.txt so new rows
// can be added by editing a plain text file instead of the HTML.
// Format per line: server | status | notes | detection
// (status: Works / Flagged / Banned). Lines starting with # are ignored.

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function parseServers(text) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const [server = "", status = "Works", notes = "", detection = ""] = line.split("|").map((s) => s.trim());
      return { server, status, notes, detection };
    })
    .filter((row) => row.server);
}

function detectionCellHtml(text) {
  if (!text) return '<td class="detect-cell">—</td>';
  const needsToggle = text.length > 70;
  const toggle = needsToggle ? '<button type="button" class="detect-toggle">More</button>' : "";
  return `<td class="detect-cell"><span class="detect-text">${escapeHtml(text)}</span>${toggle}</td>`;
}

async function loadServers() {
  const tbody = document.getElementById("sheet-body");
  try {
    const res = await fetch("servers.txt");
    const rows = parseServers(await res.text());

    if (!rows.length) {
      tbody.innerHTML = '<tr><td colspan="4">No servers listed yet.</td></tr>';
      return;
    }

    tbody.innerHTML = rows
      .map(
        (row) =>
          `<tr><td>${escapeHtml(row.server)}</td>` +
          `<td><span class="status-badge">${escapeHtml(row.status)}</span></td>` +
          `<td>${escapeHtml(row.notes)}</td>` +
          detectionCellHtml(row.detection) +
          `</tr>`
      )
      .join("");

    tbody.addEventListener("click", (e) => {
      const btn = e.target.closest(".detect-toggle");
      if (!btn) return;
      const cell = btn.closest(".detect-cell");
      const expanded = cell.classList.toggle("is-expanded");
      btn.textContent = expanded ? "Less" : "More";
    });
  } catch (err) {
    tbody.innerHTML = '<tr><td colspan="4">Couldn\'t load the server list.</td></tr>';
  }
}

document.addEventListener("DOMContentLoaded", loadServers);

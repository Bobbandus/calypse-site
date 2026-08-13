// Loads the Tested Minecraft Servers table from servers.txt so new rows
// can be added by editing a plain text file instead of the HTML.
// Format per line: server | status | notes  (status: Works / Flagged / Banned)
// Lines starting with # are ignored.

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
      const [server = "", status = "Works", notes = ""] = line.split("|").map((s) => s.trim());
      return { server, status, notes };
    })
    .filter((row) => row.server);
}

async function loadServers() {
  const tbody = document.getElementById("sheet-body");
  try {
    const res = await fetch("servers.txt");
    const rows = parseServers(await res.text());

    if (!rows.length) {
      tbody.innerHTML = '<tr><td colspan="3">No servers listed yet.</td></tr>';
      return;
    }

    tbody.innerHTML = rows
      .map(
        (row) =>
          `<tr><td>${escapeHtml(row.server)}</td>` +
          `<td><span class="status-badge">${escapeHtml(row.status)}</span></td>` +
          `<td>${escapeHtml(row.notes)}</td></tr>`
      )
      .join("");
  } catch (err) {
    tbody.innerHTML = '<tr><td colspan="3">Couldn\'t load the server list.</td></tr>';
  }
}

document.addEventListener("DOMContentLoaded", loadServers);

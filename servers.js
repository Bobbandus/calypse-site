// Tiny local "spreadsheet" for the Tested Minecraft Servers list.
// Rows live in this browser's localStorage only — nothing is sent anywhere.

const STORAGE_KEY = "bobware_tested_servers";

function loadRows() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return Array.isArray(parsed) && parsed.length ? parsed : [{ server: "", status: "works", notes: "" }];
  } catch {
    return [{ server: "", status: "works", notes: "" }];
  }
}

function persist() {
  const rows = Array.from(document.querySelectorAll("#sheet-body tr")).map((tr) => ({
    server: tr.querySelector(".cell-server").textContent.trim(),
    status: tr.querySelector(".cell-status").value,
    notes: tr.querySelector(".cell-notes").textContent.trim(),
  }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
}

function makeRow(data) {
  data = data || { server: "", status: "works", notes: "" };
  const tr = document.createElement("tr");

  const serverTd = document.createElement("td");
  serverTd.contentEditable = "true";
  serverTd.className = "cell-server";
  serverTd.dataset.placeholder = "play.example.net";
  serverTd.textContent = data.server;
  serverTd.addEventListener("blur", persist);

  const statusTd = document.createElement("td");
  const select = document.createElement("select");
  select.className = "status-select cell-status " + data.status;
  [
    ["works", "Works"],
    ["flagged", "Flagged"],
    ["banned", "Banned"],
  ].forEach(([value, label]) => {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = label;
    if (value === data.status) opt.selected = true;
    select.appendChild(opt);
  });
  select.addEventListener("change", () => {
    select.className = "status-select cell-status " + select.value;
    persist();
  });
  statusTd.appendChild(select);

  const notesTd = document.createElement("td");
  notesTd.contentEditable = "true";
  notesTd.className = "cell-notes";
  notesTd.dataset.placeholder = "notes...";
  notesTd.textContent = data.notes;
  notesTd.addEventListener("blur", persist);

  const actionTd = document.createElement("td");
  const del = document.createElement("button");
  del.className = "row-delete";
  del.textContent = "×";
  del.title = "Remove row";
  del.addEventListener("click", () => {
    tr.remove();
    persist();
  });
  actionTd.appendChild(del);

  tr.append(serverTd, statusTd, notesTd, actionTd);
  return tr;
}

document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("sheet-body");
  loadRows().forEach((row) => body.appendChild(makeRow(row)));

  document.getElementById("add-row").addEventListener("click", () => {
    const tr = makeRow();
    body.appendChild(tr);
    tr.querySelector(".cell-server").focus();
    persist();
  });
});

// Resolves the latest GitHub release's actual .exe asset so the download
// button is a direct file link (starts downloading immediately) instead of
// sending visitors to github.com/.../releases first. Falls back to the
// releases page (already set as the button's href in the HTML) if the
// GitHub API call fails for any reason (rate limit, offline, etc).

const REPO = "Bobbandus/calypse";

async function loadLatestRelease() {
  const desc = document.getElementById("download-desc");
  const btn = document.getElementById("download-btn");

  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`);
    if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);
    const release = await res.json();

    const exeAsset = release.assets.find((a) => a.name.toLowerCase().endsWith(".exe"));
    if (!exeAsset) throw new Error("No .exe asset on the latest release");

    btn.href = exeAsset.browser_download_url;
    desc.textContent = `Calypse ${release.tag_name.replace(/^v/, "")} for Windows — ${(exeAsset.size / 1e6).toFixed(1)} MB installer.`;
  } catch (err) {
    desc.textContent = "Couldn't fetch the latest version automatically — this button opens the releases page instead.";
  }
}

document.addEventListener("DOMContentLoaded", loadLatestRelease);

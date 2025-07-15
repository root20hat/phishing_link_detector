const status = document.getElementById("status");
const toggleBtn = document.getElementById("toggle");

chrome.storage.local.get("enabled", (data) => {
  const enabled = data.enabled ?? true;
  updateUI(enabled);
});

toggleBtn.onclick = () => {
  chrome.storage.local.get("enabled", (data) => {
    const current = data.enabled ?? true;
    const newState = !current;
    chrome.storage.local.set({ enabled: newState }, () => {
      updateUI(newState);
    });
  });
};

function updateUI(enabled) {
  status.innerHTML = `Status: <b>${enabled ? "ON" : "OFF"}</b>`;
  toggleBtn.textContent = enabled ? "Turn OFF" : "Turn ON";
}

const lookalikeDomains = [
  "go0gle.com", "paypa1.com", "micr0soft.com", "facebo0k.com",
  "g00gle.com", "y0utube.com", "lin1kedin.com", "bankofamerca.com"
];

chrome.storage.local.get("enabled", (data) => {
  if (data.enabled === false) return;

  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const url = link.href.toLowerCase();
    for (const fakeDomain of lookalikeDomains) {
      if (url.includes(fakeDomain)) {
        link.style.backgroundColor = "red";
        link.style.color = "white";
        link.title = "⚠️ Suspicious link detected!";
        link.addEventListener("click", (e) => {
          const confirmLeave = confirm("⚠️ Warning: This may be a phishing link.\nDo you want to continue?");
          if (!confirmLeave) e.preventDefault();
        });
      }
    }
  });
});

// Calypse site — minimal, no dependencies.

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    header.style.borderBottomColor = window.scrollY > 10 ? "var(--accent-dim)" : "var(--border)";
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

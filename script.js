// BobWare site — tiny progressive-enhancement touches, no dependencies.

document.addEventListener("DOMContentLoaded", () => {
  // Header shrinks/adds shadow once you scroll past the hero.
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = "0 8px 24px -12px rgba(0,0,0,0.6)";
    } else {
      header.style.boxShadow = "none";
    }
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Fade sections in as they enter the viewport.
  const revealTargets = document.querySelectorAll(".card, .clicker-grid, .hero-terminal");
  revealTargets.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => observer.observe(el));
});

// Smooth scroll já existente + reveal on-scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// IntersectionObserver para revelar elementos com a classe .reveal
(function(){
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    // fallback: mostrar todos
    reveals.forEach(el => el.classList.add('in-view'));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => obs.observe(el));
})();

// equeno efeito parallax do hero background (suave)
(function(){
  const hero = document.querySelector('.hero');
  if (!hero) return;
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 6;
    const y = (e.clientY / window.innerHeight - 0.5) * 6;
    hero.style.transform = `translate3d(${x}px, ${y/3}px, 0)`;
    hero.style.transition = 'transform 0.12s linear';
  });
})();

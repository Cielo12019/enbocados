// Enbocados — interacciones ligeras

document.addEventListener("DOMContentLoaded", () => {
  // Animación de aparición al hacer scroll para los productos de la carta
  const productos = document.querySelectorAll(".producto");

  if ("IntersectionObserver" in window && productos.length) {
    productos.forEach((el) => {
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

    productos.forEach((el) => observer.observe(el));
  }
});

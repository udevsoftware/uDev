// Cambiar fondo del navbar al scrollear
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveLink();
});

// ScrollSpy: resalta el link activo según sección visible
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

function updateActiveLink() {
  const scrollPos = window.scrollY + window.innerHeight / 4;
  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-menu a[href="#${id}"]`);
    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach(a => a.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
}

// Inicializa el estado al cargar
updateActiveLink();

// Máquina de escribir + borrado
const txt = "Creamos E-commerce y Páginas Web a Medida";
const speedType = 100;      // ms por carácter al escribir
const speedDelete = 50;     // ms por carácter al borrar
const delayBetween = 2000;  // ms de pausa tras escribir
let idx = 0;
let deleting = false;
const el = document.getElementById("typing-text");

function typeLoop() {
  if (!deleting) {
    el.textContent = txt.substring(0, idx + 1);
    idx++;
    if (idx === txt.length) {
      deleting = true;
      return setTimeout(typeLoop, delayBetween);
    }
  } else {
    el.textContent = txt.substring(0, idx - 1);
    idx--;
    if (idx === 0) {
      deleting = false;
    }
  }
  setTimeout(typeLoop, deleting ? speedDelete : speedType);
}

window.addEventListener("load", () => {
  idx = 0;
  deleting = false;
  typeLoop();
});

// Scroll reveal con Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const revealSections = document.querySelectorAll('.section');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  revealSections.forEach(sec => revealObserver.observe(sec));
});

// Lógica del menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Cerrar menú al hacer clic en un enlace (móvil)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});

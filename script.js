const links = document.querySelectorAll('.nav-link');
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');

links.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    carousel.style.transform = `translateX(-${index * 100}%)`;

    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

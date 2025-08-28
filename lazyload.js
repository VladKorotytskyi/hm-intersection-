// Всі картинки з атрибутом data-src
const images = document.querySelectorAll('img[data-src]');

// IntersectionObserver для лінивого завантаження
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      // міняємо src на data-src
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');

      // Коли картинка завантажиться – додаємо клас для анімації
      img.onload = () => img.classList.add('loaded');

      // перестаємо спостерігати
      obs.unobserve(img);
    }
  });
}, {
  threshold: 0.1
});

// Почати спостереження
images.forEach(img => observer.observe(img));


// Додатково: завантаження всіх картинок по кліку на кнопку
const btn = document.getElementById('loadBtn');
btn.addEventListener('click', () => {
  images.forEach(img => {
    if (img.hasAttribute('data-src')) {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
      img.onload = () => img.classList.add('loaded');
    }
  });
});

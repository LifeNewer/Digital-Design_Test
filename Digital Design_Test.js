function formatDate(date) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('ru-RU', options);
}

window.addEventListener('DOMContentLoaded', (event) => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const productCards = document.getElementsByClassName('product-card');
    for (let card of productCards) {
      card.classList.toggle('hidden');
    }
  });

  const buyButtons = document.getElementsByClassName('buy-btn');
  const buyFormOverlay = document.getElementById('buy-form-overlay');

  Array.from(buyButtons).forEach((button) => {
    button.addEventListener('click', () => {
      buyFormOverlay.style.display = 'flex';
    });
  });

  const closeFormButton = document.getElementById('close-form');
  const buyForm = document.getElementById('buy-form');

  closeFormButton.addEventListener('click', () => {
    buyFormOverlay.style.display = 'none';
  });

  buyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Поздравляем! Покупка совершена.');
    buyForm.reset();
    buyFormOverlay.style.display = 'none';
  });

  const dateElements = document.getElementsByClassName('date');
  for (let dateElement of dateElements) {
    const currentDate = new Date();
    dateElement.innerText = formatDate(currentDate);
  }

  const allCategoriesButton = document.getElementById('all-categories');
  const categoryLinks = document.querySelectorAll('#category-menu ul li a');
  const sections = document.querySelectorAll('section');

  allCategoriesButton.addEventListener('click', () => {
    sections.forEach((section) => {
      section.style.display = 'block';
    });
  });

  categoryLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetSectionId = link.getAttribute('href');
      const targetSection = document.querySelector(targetSectionId);

      event.preventDefault();
      sections.forEach((section) => {
        section.style.display = 'none';
      });
      targetSection.style.display = 'block';
    });
  });

  const addToCategoryButtons = document.getElementsByClassName('add-to-category');
  Array.from(addToCategoryButtons).forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-product-id');
      const categoryId = button.getAttribute('data-category-id');

      const productCard = document.querySelector(`.product-card[data-product-id="${productId}"]`);
      const categorySection = document.getElementById(categoryId);

      if (productCard && categorySection) {
        const newProductCard = productCard.cloneNode(true);
        categorySection.appendChild(newProductCard);
      }
    });
  });
});
window.addEventListener('scroll', function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollToTopButton = document.getElementById('scroll-to-top');
  
  if (scrollTop > 300) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

document.getElementById('scroll-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


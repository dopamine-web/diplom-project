new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 0,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper1 = new Swiper(".mySwiper1", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});


const tags = document.querySelectorAll('.tag');
const input = document.querySelector('.search__input');

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    input.value = tag.textContent;
    input.focus();
  });
});

const navItem = document.querySelector('.header__nav-item-pr');

navItem.addEventListener('click', (e) => {
  e.preventDefault();
  navItem.classList.toggle('active');
});

document.querySelector('.header__burger').addEventListener('click', function () {
    document.body.classList.toggle('body--opened-menu');
});

document.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('body--opened-menu');
    });
});

let itemsSwiper;

function initItemsSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1100 && !itemsSwiper) {
    itemsSwiper = new Swiper('.items__inner', {
      wrapperClass: 'swiper-wrapper',
      slideClass: 'swiper-slide1',
      slidesPerView: 1.5,
      spaceBetween: 20,
      breakpoints: {
        768: { slidesPerView: 2 },
        1100: { slidesPerView: 3 },
      },
    });
  } else if (screenWidth >= 1100 && itemsSwiper) {
    itemsSwiper.destroy(true, true);
    itemsSwiper = undefined;
  }
}

window.addEventListener('load', initItemsSwiper);
window.addEventListener('resize', initItemsSwiper);



// function scrollToLink() {
//   const anchors = document.querySelectorAll('a[href*="#"]');

//   for (let anchor of anchors) {
//     anchor.addEventListener("click", function (event) {
//       event.preventDefault();
//       const blockID = anchor.getAttribute("href");
//       document.querySelector("" + blockID).scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     });
//   }
// }
// scrollToLink();

//попапы
const popups = document.querySelectorAll(".popup");
const overlay = document.querySelector(".popup-overlay");
const popupBtn = document.querySelectorAll(".popup-btn");
const closeBtn = document.querySelectorAll(".close-btn");

function popup() {
  popupBtn.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      let data = e.currentTarget.getAttribute("data-path");

      popups.forEach((elem) => {
        elem.classList.remove("popup--visible");
      });

      document
        .querySelector(`[data-target="${data}"]`)
        .classList.add("popup--visible");
      overlay.classList.add("popup-overlay--visible");
    });
  });

  overlay.addEventListener("click", (e) => {
    document.body.classList.remove('ov-hidden');
    if (e.target == overlay) {
      overlay.classList.remove("popup-overlay--visible");
      popups.forEach((el) => {
        el.classList.remove("popup--visible");
      });
    }
  });

  closeBtn.forEach((elem) => {
    document.body.classList.remove('ov-hidden');
    elem.addEventListener("click", () => {
      overlay.classList.remove("popup-overlay--visible");
      popups.forEach((el) => {
        el.classList.remove("popup--visible");
      });
    });
  });
}
popup();

//мобильное меню
const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.close-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');


const mobileMenuOpen = (elem) => {
  elem.classList.add('active');
}

const mobileMenuClose = (elem) => {
  elem.classList.remove('active');
}

menuOpenBtn.addEventListener('click', () => {
  mobileMenuOpen(mobileMenu);
});

menuCloseBtn.addEventListener('click', () => {
  mobileMenuClose(mobileMenu);
});

mobileMenuLinks.forEach((elem) => {
  elem.addEventListener('click', () => {
    mobileMenuClose(mobileMenu);
  })
})

const newsWrapper = document.querySelector('.news__wrapper');
const body = document.body;

const isMobile = (elemWidth, elemModifable) => {
  if (elemWidth.clientWidth <= 1024) {
    elemModifable.classList.add('news-slider');

    const newsSlider = new Swiper(".news-slider", {
    });
  }
  else {
    elemModifable.classList.remove('news-slider');
  }
}

window.onload = () => {
  isMobile(body, newsWrapper);
}

const reviewsSlider = new Swiper(".reviews__slider", {
  navigation: {
    nextEl: ".reviews-slider-button-next",
    prevEl: ".reviews-slider-button-prev",
  },
  // effect: "fade",
  // loop: "infinite",
});

// // Прослушиваем событие изменения размера страницы
// window.addEventListener("resize", function() {
//   isMobile(body, newsWrapper);
  
// }, false);
 

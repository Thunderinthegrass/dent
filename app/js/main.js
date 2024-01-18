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

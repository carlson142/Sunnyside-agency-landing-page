const btnMenu = document.querySelector(".mob-nav--btn");
const mobMenu = document.querySelector(".mob-nav--menu");

btnMenu.addEventListener("click", () => {
  if (mobMenu.style.opacity == 0) {
    mobMenu.style.opacity = 1;
    mobMenu.style.width = "30rem";
  } else {
    mobMenu.style.opacity = 0;
    mobMenu.style.width = "0rem";
  }
});

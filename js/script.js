const openBurger = document.querySelector(".nav__burger");
const navList = document.querySelector(".nav__list");
openBurger.addEventListener("click", openBurgerHandler);

function openBurgerHandler() {
  navList.classList.add("open");
}

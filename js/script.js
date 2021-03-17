const openBurger = document.querySelector(".nav__burger");
const nav = document.querySelector(".nav");
const navExit = document.querySelector(".nav__exit");
openBurger.addEventListener("click", openBurgerHandler);
navExit.addEventListener("click", closeBurgerHandler);

function openBurgerHandler() {
  nav.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeBurgerHandler() {
  nav.classList.remove("open");
  document.body.style.overflow = "auto";
}

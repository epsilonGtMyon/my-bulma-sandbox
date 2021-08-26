import './style.scss'

const navbarBurger = document.getElementById("navbar-burger");
const appSideMenu = document.querySelector(".appSideMenu");

navbarBurger.addEventListener("click", () => {
  if (appSideMenu.classList.contains("is-shown")) {
    appSideMenu.classList.remove("is-shown");
  } else {
    appSideMenu.classList.add("is-shown");
  }
});

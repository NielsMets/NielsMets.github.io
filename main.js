const menuToggle = document.getElementsByClassName("menu-toggle");
const menuItems = document.getElementById("full-menu").childNodes;

const toggleMenu = () => {
  const menu = document.getElementsByClassName("menu");
  menu[0].classList.toggle("menu-open");
};

for (let i = 0; i < menuToggle.length; i++) {
  menuToggle[i].addEventListener("click", toggleMenu);
}

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", toggleMenu);
}

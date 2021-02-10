const menuItems = document.getElementsByClassName("menu-item");
const menuBtn = document.querySelector(".menu-btn");

for (i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function () {
    menuBtn.checked = false;
  });
}

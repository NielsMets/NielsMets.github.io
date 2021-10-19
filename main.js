const menuToggle = document.getElementsByClassName("menu-toggle");
const menuItems = document.getElementById("full-menu").childNodes;
const contactEmail = document.getElementsByClassName("contact-email");

const toggleMenu = () => {
  const menu = document.getElementsByClassName("menu");
  menu[0].classList.toggle("menu-open");
  toggleScroll();
};

const toggleScroll = () => {
  const body = document.body;
  body.classList.toggle("no-scroll");
};

const emailHoverEnter = (i) => {
  return () => {
    contactEmail[i].children[1].textContent = "Click to copy!";
  };
};

const emailHoverExit = (i) => {
  return () => {
    contactEmail[i].children[1].textContent = "Metsniels@gmail.com";
  };
};

const emailClipboard = () => {
  navigator.clipboard.writeText("metsniels@gmail.com");
};

for (let i = 0; i < menuToggle.length; i++) {
  menuToggle[i].addEventListener("click", toggleMenu);
}

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", toggleMenu);
}

for (let i = 0; i < contactEmail.length; i++) {
  contactEmail[i].addEventListener("mouseover", emailHoverEnter(i));
  contactEmail[i].addEventListener("mouseleave", emailHoverExit(i));
  contactEmail[i].addEventListener("click", emailClipboard);
}

class ContactEmail {
  constructor() {
    alert("yo");
    this.copyEmail = document.getElementsByClassName("copy-email");
    this.events();
  }

  events() {
    for (let i = 0; i < this.copyEmail.length; i++) {
      this.copyEmail[i].addEventListener("mouseover", this.emailHoverEnter(i));
      this.copyEmail[i].addEventListener("mouseleave", this.emailHoverExit(i));
      this.copyEmail[i].addEventListener("click", this.emailClipboard);
    }
  }

  emailHoverEnter = (i) => {
    return () => {
      this.copyEmail[i].children[1].textContent = "Click to copy!";
    };
  };

  emailHoverExit = (i) => {
    return () => {
      this.copyEmail[i].children[1].textContent = "Metsniels@gmail.com";
    };
  };

  emailClipboard = () => {
    navigator.clipboard.writeText("metsniels@gmail.com");
  };
}

class Menu {
  constructor() {
    this.menuToggle = document.getElementsByClassName("menu-toggle");
    this.menuItems = document.getElementById("full-menu").childNodes;
    this.menu = document.getElementsByClassName("menu");
    this.body = document.body;
    this.events();
  }

  events() {
    for (let i = 0; i < this.menuToggle.length; i++) {
      this.menuToggle[i].addEventListener("click", this.toggleMenu);
    }

    for (let i = 0; i < this.menuItems.length; i++) {
      this.menuItems[i].addEventListener("click", this.toggleMenu);
    }
  }

  toggleMenu = () => {
    this.menu[0].classList.toggle("menu-open");
    this.toggleScroll();
  };

  toggleScroll = () => {
    this.body.classList.toggle("no-scroll");
  };
}

const menu = new Menu();
const contactEmail = new ContactEmail();

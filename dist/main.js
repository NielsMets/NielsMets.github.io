class ContactEmail {
  constructor() {
    this.contactEmail = document.getElementsByClassName("contact-email");
    this.events();
  }

  events() {
    for (let i = 0; i < this.contactEmail.length; i++) {
      this.contactEmail[i].addEventListener(
        "mouseover",
        this.emailHoverEnter(i)
      );
      this.contactEmail[i].addEventListener(
        "mouseleave",
        this.emailHoverExit(i)
      );
      this.contactEmail[i].addEventListener("click", this.emailClipboard);
    }
  }

  emailHoverEnter = (i) => {
    return () => {
      this.contactEmail[i].children[1].textContent = "Click to copy!";
    };
  };

  emailHoverExit = (i) => {
    return () => {
      this.contactEmail[i].children[1].textContent = "Metsniels@gmail.com";
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
    toggleScroll();
  };

  toggleScroll = () => {
    this.body.classList.toggle("no-scroll");
  };
}

const menu = new Menu();
const contactEmail = new ContactEmail();

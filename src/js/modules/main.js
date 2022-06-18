export const showMenu = () => {
  /*=============== SHOW MENU ===============*/
  const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

  /*===============  MENU SHOW ===============*/
  // validate if constant exists
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  /*===============  MENU HIDDEN ===============*/
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
};

/*=============== REMOVE MENU MOBILE ===============*/
export const removeMenuMobile = () => {
  const navLink = document.querySelectorAll(".nav__link");

  function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    //when we click on each, link we remove show menu class
    navMenu.classList.remove("show-menu");
  }
  navLink.forEach((link) => link.addEventListener("click", linkAction));
};

/*=============== CHANGE BACKGROUND HEADER ===============*/
export function scrollHeader() {
  const header = document.getElementById("header");
  //when the scroll is greater that 50 viewport height, add the scroll-heaer class еще the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*=============== POPULAR SWIPER ===============*/

/*=============== MIXITUP FILTER FEATURED ===============*/

/* Link active featured */
export const linkActiveFeatured = () => {
  const link = document.querySelectorAll(".featured__item");
  function activeFeatured() {
    link.forEach((el) => el.classList.remove("active-featured"));
    this.classList.add("active-featured");
  }
  link.forEach((el) => el.addEventListener("click", activeFeatured));
};

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/

const navbtnEl = document.querySelector(".nav-button");

const navlistEl = document.querySelector(".navigation__list");
const hamburger1El = document.querySelector(".hamburger-line__1");
const hamburger2El = document.querySelector(".hamburger-line__2");
const hamburger3El = document.querySelector(".hamburger-line__3");

navbtnEl.addEventListener("click", function () {
  navlistEl.classList.toggle("show");
  hamburger1El.classList.toggle("show");
  hamburger2El.classList.toggle("show");
  hamburger3El.classList.toggle("show");
});

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Smooth scrolling animation

///////////////////////////////////////////////////////////
// Sticky navigation

const headerheroEl = document.querySelector(".header__img-box");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.querySelector("nav").classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.querySelector("nav").classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(headerheroEl);

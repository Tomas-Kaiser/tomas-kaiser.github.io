const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// Navbar logic
const navCollapsible = document.querySelector(".nav-collapsible");

navCollapsible.addEventListener("click", function () {
  document
    .querySelector(".nav-collapsible__content")
    .classList.toggle("collapsible--expanded");
});

// Navbar intersection
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");

const heroOptions = {
  rootMargin: "-500px 0px 0px 0px",
};

const heroObserver = new IntersectionObserver(function (entries, heroObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });
}, heroOptions);

heroObserver.observe(hero);

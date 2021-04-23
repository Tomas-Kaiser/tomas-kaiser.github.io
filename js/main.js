const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// Navbar logic
const navCollapsible = document.querySelector(".nav-collapsible");

const collapsibleMenu = function () {
  document
    .querySelector(".nav-collapsible__content")
    .classList.toggle("collapsible--expanded");

  document
    .querySelector(".nav__toggler")
    .classList.toggle("nav-toggler--expanded");
};

// toggle collapsible hamburger menu
navCollapsible.addEventListener("click", collapsibleMenu);

// collabse navbar once clicking on link nav menu
const navList = document.querySelectorAll(".nav__list");
navList.forEach((item) => item.addEventListener("click", collapsibleMenu));

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

// About Intersection
const about = document.querySelector(".about");
const listAbout = document.querySelector(".list__about");
const aboutOption = {
  rootMargin: "-25% 0px -40% 0px",
};
const aboutObserver = new IntersectionObserver(function (
  entries,
  aboutObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      listAbout.classList.add("current");
    } else {
      listAbout.classList.remove("current");
    }
  });
},
aboutOption);

aboutObserver.observe(about);

// Tech Intersection
const tech = document.querySelector(".technologies_section");
const listtech = document.querySelector(".list__tech");
const techOption = {
  rootMargin: "-25% 0px -40% 0px",
};
const techObserver = new IntersectionObserver(function (entries, techObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      listtech.classList.add("current");
    } else {
      listtech.classList.remove("current");
    }
  });
}, techOption);

techObserver.observe(tech);

// Projects Intersection
const projects = document.querySelector(".block-side-projects");
const listprojects = document.querySelector(".list__projects");
const projectsOption = {
  rootMargin: "-25% 0px -40% 0px",
};
const projectsObserver = new IntersectionObserver(function (
  entries,
  projectsObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      listprojects.classList.add("current");
    } else {
      listprojects.classList.remove("current");
    }
  });
},
projectsOption);

projectsObserver.observe(projects);

// Exp Intersection
const exp = document.querySelector(".block-timeline");
const listExp = document.querySelector(".list__exp");
const expOption = {
  rootMargin: "-25% 0px -40% 0px",
};
const expObserver = new IntersectionObserver(function (entries, expObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      listExp.classList.add("current");
    } else {
      listExp.classList.remove("current");
    }
  });
}, expOption);

expObserver.observe(exp);

// Testimonal Intersection
const testimonal = document.querySelector(".block-testimonial");
const listTestimonal = document.querySelector(".list__testimonials");
const testimonalOption = {
  rootMargin: "-25% 0px -40% 0px",
};
const testimonalObserver = new IntersectionObserver(function (
  entries,
  testimonalObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      listTestimonal.classList.add("current");
    } else {
      listTestimonal.classList.remove("current");
    }
  });
},
testimonalOption);

testimonalObserver.observe(testimonal);

// Contact Intersection
const contact = document.querySelector(".contact");
const listContact = document.querySelector(".list__contact");
const contactOption = {
  rootMargin: "-25% 0px -40% 0px",
};
const contactObserver = new IntersectionObserver(function (
  entries,
  contactObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      listContact.classList.add("current");
    } else {
      listContact.classList.remove("current");
    }
  });
},
contactOption);

contactObserver.observe(contact);

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-left");

const appearOptions = {
  rootMargin: "0px 0px -100px 0px",
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

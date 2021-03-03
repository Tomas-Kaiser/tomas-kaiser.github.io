const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
    console.log("click");
  })
);

// Navbar logic
const navCollapsible = document.querySelector(".nav-collapsible");

navCollapsible.addEventListener("click", function () {
  document
    .querySelector(".nav-collapsible__content")
    .classList.toggle("collapsible--expanded");
});

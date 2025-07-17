
  document.querySelector(".burger").addEventListener("click", function () {
    document.querySelector(".nav-menu").classList.toggle("active");
  });
  document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const navMenu = document.querySelector(".nav-menu");
  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
});


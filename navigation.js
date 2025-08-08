const dropdownToggles = document.querySelectorAll(".dropdown-link");
const nav = document.querySelector(".nav-container");

dropdownToggles.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();

    const isExpanded = button.getAttribute("aria-expanded") === "true";

    dropdownToggles.forEach((btn) =>
      btn.setAttribute("aria-expanded", "false")
    );

    if (!isExpanded) {
      button.setAttribute("aria-expanded", "true");
    }
  });
});

document.addEventListener("click", (e) => {
  const isClickInsideNav = nav.contains(e.target);

  if (!isClickInsideNav) {
    dropdownToggles.forEach((btn) =>
      btn.setAttribute("aria-expanded", "false")
    );
  }
});

const mobileToggleBtn = document.getElementById("menu-toggle");
const mobileToggleIcon = mobileToggleBtn.querySelector("img");
const menu = document.querySelector(".nav-container");
const overlay = document.querySelector(".overlay");

mobileToggleBtn.addEventListener("click", function () {
  const isMenuOpen = mobileToggleIcon.src.includes("icon-menu.svg");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
  mobileToggleBtn.classList.toggle("fixed");
  if (isMenuOpen) {
    mobileToggleIcon.src = "./images/icon-close-menu.svg";
    mobileToggleBtn.setAttribute("aria-label", "Close Navigation Menu");
  } else {
    mobileToggleIcon.src = "./images/icon-menu.svg";
    mobileToggleBtn.setAttribute("aria-label", "Open Navigation Menu");
  }
});

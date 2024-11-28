let navItems = document.querySelectorAll(".mainnav li");
let dropdownitems = document.querySelectorAll(".dropdown li");
let dropdownbtn = document.querySelector(".dropdown i");
let dropdownmenu = document.querySelector(".dropdown ul");
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((nav) =>
      nav.querySelector("a").classList.remove("active")
    );
    this.querySelector("a").classList.add("active");
  });
});
dropdownitems.forEach((item) => {
  item.addEventListener("click", function () {
    dropdownitems.forEach((nav) =>
      nav.querySelector("a").classList.remove("active")
    );
    this.querySelector("a").classList.add("active");
  });
});
dropdownbtn.addEventListener("click", function () {
  // Toggle the display style
  if (dropdownmenu.style.display === "block") {
    dropdownmenu.style.display = "none";
  } else {
    dropdownmenu.style.display = "block";
  }
});
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },

  // Navigation arrows


  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const tswiper = new Swiper(" .trainers .swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

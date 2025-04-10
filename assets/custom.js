/*
// Start of the navbar toggle and sticky header
document.addEventListener("DOMContentLoaded", function () {
  let menuBtn = document.getElementById("menu-btn");
  let closeBtn = document.getElementById("close-btn");
  let menu = document.getElementById("mobile-menu");
  let body = document.body;

  function toggleMenu() {
    menu.classList.toggle("-translate-y-full");
    body.classList.toggle("overflow-y-hidden"); // Body me class toggle kare
  }

  menuBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
});

document.addEventListener("DOMContentLoaded", function () {
  let header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      //header.classList.add("bg-white");
    } else {
      // header.classList.remove("bg-white");
    }
  });
});

// <!---------- End of the navbar toggle and sticky header ----------->

// const video = document.getElementById("video");

// video.addEventListener("click", () => {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
// });

$(document).ready(function () {
  $(".vs-update-slider").owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        loop: true,
        items: 1,
      },
      768: {
        items: 2,
        margin: 20,
      },
      992: {
        items: 3,
        margin: 40,
        loop: false,
        MouseDrag: false,
        touchDrag: false,
      },
    },
  });

  $(".latest-project-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    items: 3,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 3000,
  });
  //  Vuba World Blends section
  $(".vuba-world-bleds-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    items: 4,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 3000,
  });
  $(".vuba-installer-slider").owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        loop: true,
        items: 1,
        margin: 15,
      },
      576: {
        items: 2,
        margin: 15,
      },
      768: {
        items: 3,
        margin: 15,
      },
      992: {
        items: 4,
        margin: 15,
      },
      1200: {
        items: 5,
        margin: 15,
        loop: false,
        MouseDrag: false,
        touchDrag: false,
      },
    },
  });
  $("#magic-slider").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 55,
    dots: true,
    responsive: {
      0: {
        dots: true,
      },
      768: {
        items: 2,
        dots: false,
      },
    },
  });
});

// Filter category Section
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll("[data-filter-type]");
  const filterItems = document.querySelectorAll(
    "[data-color], [data-job], [data-type]"
  );
  let selectedFilters = {
    color: [],
    job: [],
    type: [],
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterType = this.getAttribute("data-filter-type");
      const filterValue = this.getAttribute("data-filter-value");
      if (selectedFilters[filterType].includes(filterValue)) {
        selectedFilters[filterType] = selectedFilters[filterType].filter(
          (value) => value !== filterValue
        );
        this.classList.remove("bg-primary", "text-white");
      } else {
        selectedFilters[filterType].push(filterValue);
        this.classList.add("bg-primary", "text-white");
      }
      filterItems.forEach((item) => {
        const itemColor = item.getAttribute("data-color");
        const itemJob = item.getAttribute("data-job");
        const itemType = item.getAttribute("data-type");
        const matchesColor =
          selectedFilters.color.length === 0 ||
          selectedFilters.color.includes(itemColor);
        const matchesJob =
          selectedFilters.job.length === 0 ||
          selectedFilters.job.includes(itemJob);
        const matchesType =
          selectedFilters.type.length === 0 ||
          selectedFilters.type.includes(itemType);
        if (matchesColor && matchesJob && matchesType) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
*/

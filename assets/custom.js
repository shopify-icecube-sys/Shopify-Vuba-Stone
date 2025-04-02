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
      header.classList.add("bg-white");
    } else {
      header.classList.remove("bg-white");
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
    responsive: {
      0: { items: 1 },
      768: {
        items: 2,
        margin: 0,
      },
      1024: {
        items: 3,
        margin: 0,
      },
      1200: {
        items: 3,
      },
    },
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
});

//vuba-map javascript
function toggleDealerList() {
    document.getElementById('dealer-list').classList.toggle('hidden');
}


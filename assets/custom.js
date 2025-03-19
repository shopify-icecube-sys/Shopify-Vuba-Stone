<!---------- Start of the navbar toggle and sticky header ----------->
    document.addEventListener("DOMContentLoaded", function () {
        let menuBtn = document.getElementById("menu-btn");
        let closeBtn = document.getElementById("close-btn");
        let menu = document.getElementById("mobile-menu");

        function toggleMenu() {
            menu.classList.toggle("-translate-y-full");
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
<!---------- End of the navbar toggle and sticky header ----------->
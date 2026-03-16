document.addEventListener("DOMContentLoaded", function () {

    // -------- OLDALVÁLTÁS --------
    window.loadPage = function (page) {

        const pages = document.querySelectorAll("section");

        pages.forEach(p => {
            p.classList.remove("active-page");
            p.classList.add("inactive-page");
        });

        const selectedPage = document.getElementById(page + "-page");

        if (selectedPage) {
            selectedPage.classList.remove("inactive-page");
            selectedPage.classList.add("active-page");
        }

    };


    // -------- VENDÉGEK SZÁMA --------
    const guestInput = document.getElementById("guest-count");
    const increaseBtn = document.getElementById("increase-guests");
    const decreaseBtn = document.getElementById("decrease-guests");

    if (increaseBtn && decreaseBtn) {

        increaseBtn.addEventListener("click", () => {
            let value = parseInt(guestInput.value);
            if (value < 10) guestInput.value = value + 1;
        });

        decreaseBtn.addEventListener("click", () => {
            let value = parseInt(guestInput.value);
            if (value > 1) guestInput.value = value - 1;
        });

    }


    // -------- KAPCSOLATI ADATOK --------
    const kapcsolatAdatok = [
        {
            ikon: "fas fa-map-marker-alt",
            szoveg: "6900 Makó, Fő utca 12."
        },
        {
            ikon: "fas fa-phone",
            szoveg: "+36 30 123 4567"
        },
        {
            ikon: "fas fa-envelope",
            szoveg: "info@utazas.hu"
        }
    ];

    const kapcsolatTarolo = document.getElementById("contact-info");

    if (kapcsolatTarolo) {

        kapcsolatAdatok.forEach(adat => {

            const div = document.createElement("div");
            div.className = "flex items-center";

            div.innerHTML = `
                <i class="${adat.ikon} text-primary text-xl mr-3"></i>
                <span>${adat.szoveg}</span>
            `;

            kapcsolatTarolo.appendChild(div);

        });

    }


    // -------- KÖZÖSSÉGI MÉDIA --------
    const kozossegiAdatok = [
        { ikon: "fab fa-facebook", link: "#" },
        { ikon: "fab fa-instagram", link: "#" },
        { ikon: "fab fa-tiktok", link: "#" }
    ];

    const kozossegiTarolo = document.getElementById("social-links");

    if (kozossegiTarolo) {

        kozossegiAdatok.forEach(adat => {

            const link = document.createElement("a");

            link.href = adat.link;
            link.target = "_blank";
            link.className = "text-2xl text-primary";

            link.innerHTML = `<i class="${adat.ikon}"></i>`;

            kozossegiTarolo.appendChild(link);

        });

    }


    // -------- KAPCSOLATI ŰRLAP --------
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Üzenet elküldve! Hamarosan válaszolunk.");

            contactForm.reset();

        });

    }


    // -------- BEJELENTKEZÉS --------
    const loginForm = document.getElementById("login-form");

    if (loginForm) {

        loginForm.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Sikeres bejelentkezés (demo)");

        });

    }

});
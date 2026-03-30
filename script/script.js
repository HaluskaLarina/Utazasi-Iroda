//header betoltese
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    let he = document.getElementById("js-navbar");
    if (he) he.innerHTML = data;
  })
  .catch(error => console.error("Hiba a menü betöltődésekor!", error));


const elemek = {
  helyMenu: null,
  helyekSzama: null,
  osszesHely: null,
  toast: null,
  toastMessage: null
};
//footer betoltese
fetch("footer.html") // betölti az oldalt
  .then(response => response.text()) // a fetch amikor visszaad egy választ (response), akkor lefut egy függvény, ami a response.text() értéket adja vissza
  .then(data => {
    let el = document.getElementById("js-footer").innerHTML = data;
    if (el) el.innerHTML = data;
  })
  .catch(error => console.error("Hiba a lábléc betöltődésekor!", error));


setTimeout(() => {
  let email2Input = document.getElementById("email2");
  let gomb2 = document.getElementById("feliratkozas2");
  let uzenet2 = document.getElementById("uzenet2");

  // Regex az e-mail ellenőrzéshez
  //let emailMinta = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let email2Pattern = /^([a-z0-9_.+-])+\@(([a-z0-9-])+\.)+([a-z0-9]{2,4})+$/;

  if (email2Input && gomb2 && uzenet2) {
    email2Input.addEventListener("input", () => {
      //if (emailMinta.test(emailInput.value)) {
      if (email2Pattern.test(email2Input.value)) {
        gomb2.disabled = false;
        uzenet2.textContent = "Helyes e-mail formátum ✅";
        uzenet2.style.color = "lightgreen";
      } else {
        gomb2.disabled = true;
        uzenet2.textContent = "Érvénytelen e-mail cím.❌ Adjon meg egy érvényes e-mail címet";
        uzenet2.style.color = "darkred";
      }
    });

    gomb2.addEventListener("click", () => {
      alert("Köszönjük a feliratkozást!");
      uzenet2.textContent = "";
      email2Input.value = "";
      gomb2.disabled = true;
    });
  }
}, 100);


var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  spaceBetween: 30,
  loop: false,
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

swiper.slideTo(1, false, false);

// kapcs
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Üzenet elküldve! (demo)");
});



flatpickr("#dateRange", {
  mode: "range",
  minDate: "today",
  dateFormat: "Y. m. d.",
  locale: "hu",
  showMonths: 2,

  onClose: function (selectedDates, dateStr) {
    if (selectedDates.length === 2) {
      console.log("Érkezés:", selectedDates[0]);
      console.log("Távozás:", selectedDates[1]);
    }
  }
});



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
fetch("footer.html") 
.then(response => response.text())
.then(data => {
    let el = document.getElementById("js-footer");
    if (el) el.innerHTML = data;
})
.catch(error => console.error("Hiba a lábléc betöltődésekor!", error));



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

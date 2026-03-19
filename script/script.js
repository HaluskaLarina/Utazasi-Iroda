//header betoltese
fetch("header.html")
.then(response => response.text())
.then(data => {
    let he = document.getElementById("js-navbar");
    if (he) he.innerHTML = data;
})
.catch(error => console.error("Hiba a menü betöltődésekor!", error));

<<<<<<< HEAD

const elemek = {
    helyMenu: null,
    helyekSzama: null,
    osszesHely: null,
    toast: null,
    toastMessage: null
};
=======
//footer betoltese
fetch("footer.html") 
.then(response => response.text())
.then(data => {
    let el = document.getElementById("js-footer");
    if (el) el.innerHTML = data;
})
.catch(error => console.error("Hiba a lábléc betöltődésekor!", error));
>>>>>>> 686ec3d736c9692d996b8b6920ae123b922a1eb3

//header betoltese
fetch("header.html")
.then(response => response.text())
.then(data => {
    let he = document.getElementById("js-navbar");
    if (he) he.innerHTML = data;
})
.catch(error => console.error("Hiba a menü betöltődésekor!", error));

//footer betoltese
fetch("footer.html") 
.then(response => response.text())
.then(data => {
    let el = document.getElementById("js-footer");
    if (el) el.innerHTML = data;
})
.catch(error => console.error("Hiba a lábléc betöltődésekor!", error));

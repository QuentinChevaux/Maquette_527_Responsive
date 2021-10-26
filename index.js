let tourne = document.getElementById("tourne");

window.addEventListener("scroll", function() {
    tourne.style.transform = "rotate(-"+window.pageYOffset+"deg)";
});
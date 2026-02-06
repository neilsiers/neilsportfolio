const links = document.querySelectorAll("#galnav a");
const sections = document.querySelectorAll("#gallery > div");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); // stops jump scrolling

        const targetID = link.getAttribute("href").replace("#", "");
        const target = document.getElementById(targetID);

        // hide everything
        sections.forEach(sec => {
            sec.style.display = "none";
        });

        // show selected section
        target.style.display = "block";
    });
});
/*ZOOM ON CLICK*/
const img = document.getElementById("galleryimg");

function toggleZoom() {
    img.classList.toggle("zoomed");
}
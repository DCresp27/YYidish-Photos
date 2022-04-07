// Ensures picture always fills the window by changing either
// the width or height to 100% and the other to auto
let adjust = function() {
    let images = $(".carousel .active img");
    console.log(images);
    let windowRatio = window.innerWidth / window.innerHeight;
    let imageRatio = images[0].width / images[0].height;
    if (windowRatio < imageRatio){
        $(".carousel img").css("height", "inherit").css("width", "auto");
    } else {
        $(".carousel img").css("width", "inherit").css("height", "auto");
    }
};
$(document).ready(function() {
    adjust();
});
window.addEventListener("resize", function() {
    adjust();
});
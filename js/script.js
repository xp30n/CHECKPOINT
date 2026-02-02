document.addEventListener("DOMContentLoaded", () => {
    // NOTHING HERE YET BOZO
    buttonWorks();
})

function buttonWorks() {
    let start = document.getElementById("start-btn");

    start.addEventListener("click", mouseClick);
    
    function mouseClick() {
        console.log("gum.mp3")
    }
}
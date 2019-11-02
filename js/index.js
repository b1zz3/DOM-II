// Your code goes here
const mseWhl = document.getElementsByClassName("center");
window.addEventListener("wheel", () => {
    console.log("It works");
    // mseWhl.style.cursor = "not-allowed"; not working
});

const pics = document.querySelectorAll("img");
pics.forEach(pic => {
    pic.addEventListener('mouseenter', () => {
        pic.style.transform="scale(1.2)";
        pic.style.transition="all 0.3s";
    })
})

pics.forEach(pic => {
    pic.addEventListener('mouseleave', () => {
        pic.style.transform = "scale(1)";
        pic.style.transition = "all 0.3s";
    })
})
    // links.style.transform = "rotateY(180deg)";
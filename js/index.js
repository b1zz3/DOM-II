// Your code goes here
const body = document.querySelector("body");
body.addEventListener("keydown", () => {
    console.log("keydown");
    body.style.backgroundColor = "darkgray";
})


window.addEventListener("wheel", () => {
    console.log("It works");
    // mseWhl.style.cursor = "not-allowed"; not working
});

const pics = document.querySelectorAll("img");
pics.forEach(pic => {
    pic.addEventListener('mouseenter', () => {
        // pic.style.transform = "scale(1.2)";
        pic.style.transform = "rotateY(180deg)";
        pic.style.transition = "all 0.3s";
    })
})

pics.forEach(pic => {
    pic.addEventListener('mouseleave', () => {
        // pic.style.transform = "scale(1)";
        pic.style.transition = "all 0.3s";
        pic.style.transform = "rotateY(360deg)";
    })
})

const links = document.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.transition = "all 0.3s";
        link.style.transform = "rotateX(180deg)";
    })
})



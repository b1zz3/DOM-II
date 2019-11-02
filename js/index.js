// Your code goes here
const body = document.querySelector("body");
body.setAttribute.dragable = "true";

body.addEventListener("drag", () => {
    console.log("draggin");
    body.style.cursor = "not-allowed";
})

body.addEventListener("ondrop", () => {
    console.log("drop");
    body.style.backgroundColor = "purple";
})

body.addEventListener("keydown", () => {
    console.log("keydown");
    body.style.backgroundColor = "darkgray";
})

window.addEventListener("wheel", () => {
    console.log("It works");
    body.style.backgroundColor = "orange";
    // mseWhl.style.cursor = "not-allowed"; not working
})

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

const subHead2 = document.querySelectorAll("h2");
subHead2.forEach(sub => {
    sub.addEventListener("dblclick", () => {
        sub.style.transition = "all 0.3s";
        sub.style.transform = "rotateZ(45deg)";
    })
})

const subHead4 = document.querySelectorAll("h4");
subHead4.forEach(sub => {
    sub.addEventListener("dblclick", () => {
        sub.style.transition = "all 0.3s";
        sub.style.transform = "rotateZ(360deg)";
    })
})
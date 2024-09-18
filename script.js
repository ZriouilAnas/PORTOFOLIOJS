const p = document.getElementById("M-O")
const skills = document.getElementById("skills")
const infos = document.getElementById("infos")
const buttonMR = document.getElementById("moveR")
const buttonML = document.getElementById("moveL")
const skillsList = document.getElementById("skillsList")
const infosList = document.getElementById("infosList")
const HTML = document.getElementById("HTML")
const descHTML = document.getElementById("descHTML")
const CSS = document.getElementById("CSS")
const descCSS = document.getElementById("descCSS")
const JS = document.getElementById("JS")
const descJS = document.getElementById("descJS")
const PHP = document.getElementById("PHP")
const descPHP = document.getElementById("descPHP")
const PYHTON = document.getElementById("PYHTON")
const descPYHTON = document.getElementById("descPYHTON")


let position = 45;
const moveR = () => {
    position += 5; 
    p.style.backgroundColor = "red"
   
    p.style.left = position + "%";
    p.style.backgroundColor = "green"
    collision(p,skills)
}
const moveL = () => {
    position -= 5; 
    p.style.backgroundColor = "red"
    p.style.left = position + "%";
    collision(p,skills)
}

const collision  = (p,skills) => {
    if (position < 10) {
        skills.style.backgroundColor = "pink"
        skills.innerText = "SKILLS";
        skillsList.style.display ="block"
    } 
    else if (position > 75) {
        infos.style.backgroundColor = "pink"
        infos.innerText = "SKILLS";
        infosList.style.display ="block"
              
    } else 
    skills.style.backgroundColor = "yellowgreen";
    

}


buttonMR.addEventListener("click",moveR);
buttonML.addEventListener("click",moveL);
HTML.addEventListener("click", () => {

    if (descHTML.style.display === "none") {
        descHTML.style.display = "block"
        HTML.style.backgroundColor = "green"
    }
    else  {
        descHTML.style.display = "none"
    }
})

CSS.addEventListener("click", () => {
    CSS.style.backgroundColor = "green"
    if (descCSS.style.display == "none") {
        descCSS.style.display = "block"
    }
    else {
        descCSS.style.display = "none"
    }
})

JS.addEventListener("click", () => {
    JS.style.backgroundColor = "green"
    if (descJS.style.display == "none") {
        descJS.style.display = "block"
    }
    else {
        descJS.style.display = "none"
    }
})

PHP.addEventListener("click", () => {
    PHP.style.backgroundColor = "green"
    if (descPHP.style.display == "none") {
        descPHP.style.display = "block"
    }
    else {
        descPHP.style.display = "none"
    }
})

PYTHON.addEventListener("click", () => {
    PYTHON.style.backgroundColor = "green"
    if (descPYTHON.style.display == "none") {
        descPYTHON.style.display = "block"
    }
    else {
        descPYTHON.style.display = "none"
    }
})
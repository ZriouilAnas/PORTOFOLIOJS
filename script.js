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
const PYTHON = document.getElementById("PYTHON")
const descPYTHON = document.getElementById("PYTHON")
const container = document.getElementById("container")
const gameTEXT = document.getElementById("gameTEXT")


const endgame = () => {
if (skills.innerText == "SKILLS" && infos.innerText == "CONTACTS" ) {
    container.style.display = "none"
    gameTEXT.innerText = "GAME IS OVER, YOU WON? LOST? THIS IS MY Brutalist Websites"
}

}

let position = 45;
const moveR = () => {
    position += 5; 
    p.style.backgroundColor = "red"
   
    p.style.left = position + "%";
    p.style.backgroundColor = "green"
    collision()
    endgame()
}
const moveL = () => {
    position -= 5; 
    p.style.backgroundColor = "red"
    p.style.left = position + "%";
    collision()
    endgame()
}

const collision  = () => {
    if (position < 10) {
        skills.style.backgroundColor = "black"
        skills.innerText = "SKILLS";
        skillsList.style.display ="block"
    } 
    else if (position > 75) {
        infos.style.backgroundColor = "black"
        infos.innerText = "CONTACTS";
        infosList.style.display ="block"
              
    } else 
    skills.style.backgroundColor = "black";
    
}


buttonMR.addEventListener("click",moveR);
buttonML.addEventListener("click",moveL);
HTML.addEventListener("click", () => {

    if (descHTML.style.display === "none") {
        descHTML.style.display = "block"
        HTML.style.backgroundColor = "green"

        descCSS.style.display = "none"
        descJS.style.display = "none"
        descPHP.style.display = "none"
        descPYTHON.style.display = "none"
    }
    else  {
        descHTML.style.display = "none"
    }
})

CSS.addEventListener("click", () => {
    CSS.style.backgroundColor = "green"
    if (descCSS.style.display == "none") {
        descCSS.style.display = "block"

        descHTML.style.display = "none"
        descJS.style.display = "none"
        descPHP.style.display = "none"
        descPYTHON.style.display = "none"
    }
    else {
        descCSS.style.display = "none"
    }
})

JS.addEventListener("click", () => {
    JS.style.backgroundColor = "green"
    if (descJS.style.display == "none") {
        descJS.style.display = "block"

        descHTML.style.display = "none"
        descCSS.style.display = "none"
        descPHP.style.display = "none"
        descPYTHON.style.display = "none"
    }
    else {
        descJS.style.display = "none"
    }
})

PHP.addEventListener("click", () => {
    PHP.style.backgroundColor = "green"
    if (descPHP.style.display == "none") {
        descPHP.style.display = "block"

        descHTML.style.display = "none"
        descJS.style.display = "none"
        descCSS.style.display = "none"
        descPYTHON.style.display = "none"
    }
    else {
        descPHP.style.display = "none"
    }
})

PYTHON.addEventListener("click", () => {
    PYTHON.style.backgroundColor = "green"
    if (descPYTHON.style.display == "none") {
        descPYTHON.style.display = "block"

        descHTML.style.display = "none"
        descJS.style.display = "none"
        descPHP.style.display = "none"
        descCSS.style.display = "none"
    }
    else {
        descPYTHON.style.display = "none"
    }
})
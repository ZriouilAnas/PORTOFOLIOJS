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
const descPYTHON = document.getElementById("descPYTHON")
const container = document.getElementById("container")
const gameTEXT = document.getElementById("gameTEXT")
const bg = document.getElementById("bg")
const tglBG = document.getElementById("tglBG")
const s = document.getElementById("s")
const dORn = document.getElementById("dORn")


const endgame = () => {
if (skills.innerText == "SKILLS" && infos.innerText == "CONTACTS" ) {
    container.style.display = "none"
    bg.firstElementChild.classList.add("sky")
    gameTEXT.innerText = "GAME IS OVER, YOU WON? LOST? THIS IS MY Brutalist Websites"
}

}

let position = 45;
const moveR = () => {
    position += 5; 
    
   
    p.style.left = position + "%";
    
    collision()
    endgame()
}
const moveL = () => {
    position -= 5; 
    
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

tglBG.addEventListener("click", () => {
    if (bg.style.display == 'none' ) {
        bg.style.display = 'block'
        dORn.style.display = 'inline'
        tglFunc()
    }
    else {
        bg.style.display = 'none'
        dORn.style.display = 'none'
        s.setAttribute("href",'s0.css')

}

    

})

let tgl = 0;
const tglFunc = () => {
    
    if (tgl == 1) {
        s.setAttribute("href",'s2.css') 
        tgl = 0;
    } else if (tgl == 0 ) {
        s.setAttribute("href",'s1.css') 
        tgl = 1;
    }



}
dORn.addEventListener("click", tglFunc)

document.addEventListener("keyup" , (e) => {
 if (e.key == "ArrowLeft") {
    moveL()
 }
 else if(e.key == "ArrowRight") {
    moveR()
 }
})

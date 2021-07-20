"use strict"

let changeFormat = true;
let darkMode = true;

let buttomFormat = document.querySelector(".changeFormat");
let buttomDarkMode = document.querySelector(".darkMode");
let clock = document.querySelector(".clock");
let darkClock = document.querySelector(".clock");


const setDarkMode = ()=>{
    let body = document.getElementById("body");
    
    if(darkMode){
        body.style = "background: linear-gradient(53deg, #414141, #2e2e2e, #141414, #030303, #010101)";
        darkClock.classList.add("clock-dark-mode");
        darkClock.classList.remove("clock");
    }else{
        body.style = "background: linear-gradient(53deg, #926be7, #809dfc)";
        darkClock.classList.add("clock");
        darkClock.classList.remove("clock-dark-mode");
    }
}

buttomFormat.addEventListener('click',()=>{
    if(changeFormat){
        changeFormat = false;
        buttomFormat.textContent = "Formato de 12 Horas"

    }
    else{
        changeFormat = true
        buttomFormat.textContent = "Formato de 24 Horas"
        
    }
})

buttomDarkMode.addEventListener("click",()=>{
    if(darkMode == true){
        setDarkMode()
        darkMode = false;
        buttomDarkMode.textContent = "Desactivar Modo Oscuro"
    }else{
        setDarkMode()
        darkMode = true;
        buttomDarkMode.textContent = "Activar Modo Oscuro"
    }
})



const getTime = ()=>{
    const date = new Date();

    if(changeFormat){
        clock.textContent = date.toLocaleTimeString("en-US");
    }
    else{
        clock.textContent = date.toLocaleTimeString("es-ES");
    }

}

getTime();
setInterval(getTime,1000);



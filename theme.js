
// =====================
// DEV THEME
// =====================

if(

localStorage.getItem(
"developerLogged"
) === "true"

){

let theme =

localStorage.getItem(
"devTheme"
);

if(theme){

document.body.classList.add(
theme
);

}

}

// =====================
// CHANGE THEME
// =====================


function setTheme(theme){

let fade = document.getElementById(
"themeFade"
);

fade.style.opacity = "1";

setTimeout(()=>{

localStorage.setItem(

"devTheme",

theme

);

document.body.className = "";

document.body.classList.add(
theme
);

fade.style.opacity = "0";

},500);

}

// expose global
window.setTheme = setTheme;

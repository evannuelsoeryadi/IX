
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

=
function updateThemeButtons(){

let currentTheme =
localStorage.getItem(
"devTheme"
);

let themes = [

"cyberpunk",
"future",
"mountain",
"scifi",
"neon"

];

themes.forEach(theme=>{

let btn =
document.getElementById(
theme + "Btn"
);

if(!btn) return;

if(theme == currentTheme){

btn.innerText =
"✔ Selected";

btn.classList.add(
"selected-theme"
);

}

else{

btn.innerText =
"Use Theme";

btn.classList.remove(
"selected-theme"
);

}

});

}

updateThemeButtons();


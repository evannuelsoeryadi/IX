// =====================
// LOAD SAVED THEME
// =====================

if(

localStorage.getItem(
"developerLogged"
) === "true"

){

let savedTheme =

localStorage.getItem(
"devTheme"
);

if(savedTheme){

document.body.classList.add(
savedTheme
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

if(fade){

fade.style.opacity = "1";

}

setTimeout(()=>{

localStorage.setItem(

"devTheme",

theme

);

// hapus theme lama
document.body.classList.remove(
"cyberpunk",
"future",
"mountain",
"scifi",
"neon"
);

// pasang theme baru
document.body.classList.add(
theme
);

// update tombol
updateThemeButtons();

if(fade){

fade.style.opacity = "0";

}

},500);

}

// expose global
window.setTheme = setTheme;

// =====================
// UPDATE BUTTONS
// =====================

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

// =====================
// INIT
// =====================

updateThemeButtons();


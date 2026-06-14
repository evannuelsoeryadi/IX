
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

localStorage.setItem(

"devTheme",

theme

);

document.body.className = "";

document.body.classList.add(
theme
);

}

// expose global
window.setTheme = setTheme;


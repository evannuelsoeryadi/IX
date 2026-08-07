// =====================
// DEV PANEL
// =====================

if(

localStorage.getItem(
"developerLogged"
)==="true"

){

document.getElementById(
"devButton"
).style.display="block";

}

// =====================
// LOAD FAVORITES
// =====================

let favorites=

JSON.parse(

localStorage.getItem(
"infinite_x_favorite"
)

)||[];

// =====================
// RENDER FAVORITES
// =====================

function renderFavorites(list){

const grid=

document.getElementById(
"favoriteGrid"
);

grid.innerHTML="";

if(list.length===0){

grid.innerHTML=`

<div class="empty-favorite">

⭐ You don't have any favorite comics yet.

</div>

`;

return;

}

list.forEach(item=>{

grid.innerHTML+=`

<div class="favorite-card">

<img

src="${
item.cover||
'https://placehold.co/300x430'
}"

>

<h2>

${item.title||"Untitled"}

</h2>

<p>

${item.chapter||"Comic"}

</p>

<div class="favorite-buttons">

<button

class="read-favorite"

onclick="readFavorite('${item.id}')"

>

📖 Read

</button>

<button

class="remove-favorite"

onclick="removeFavorite('${item.id}')"

>

⭐ Remove

</button>

</div>

</div>

`;

});

}

// =====================
// READ
// =====================

window.readFavorite=function(id){

localStorage.setItem(

"selectedChapter",

id

);

location.href="reader.html";

};

// =====================
// REMOVE
// =====================

window.removeFavorite=function(id){

favorites=

favorites.filter(

item=>

String(item.id)!==String(id)

);

localStorage.setItem(

"infinite_x_favorite",

JSON.stringify(favorites)

);

renderFavorites(favorites);

};

// =====================
// SEARCH
// =====================

document
.getElementById(
"searchFavorite"
)
.addEventListener(

"input",

function(){

const keyword=

this.value
.toLowerCase();

const filtered=

favorites.filter(item=>

(item.title||"")
.toLowerCase()
.includes(keyword)

);

renderFavorites(filtered);

});

// =====================
// FIRST LOAD
// =====================

renderFavorites(favorites);

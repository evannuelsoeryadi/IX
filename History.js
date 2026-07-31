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
// LOAD HISTORY
// =====================

let history=

JSON.parse(

localStorage.getItem(
"infinite_x_history"
)

)||[];

// =====================
// RENDER HISTORY
// =====================

function renderHistory(list){

const grid=

document.getElementById(
"historyGrid"
);

grid.innerHTML="";

if(list.length===0){

grid.innerHTML=`

<div class="empty-card">

No Reading History

</div>

`;

return;

}

list
.reverse()
.forEach(item=>{

grid.innerHTML+=`

<div class="history-card">

<img
src="${
item.cover||
'https://placehold.co/300x430'
}"
>

<h3>

${item.title}

</h3>

<p>

${item.chapter||"-"}

</p>

<button

class="btn"

onclick="continueReading('${item.id}')"

>

Continue

</button>

</div>

`;

});

}

// =====================
// CONTINUE
// =====================

window.continueReading=function(id){

localStorage.setItem(

"selectedChapter",

id

);

location.href="reader.html";

}

// =====================
// SEARCH
// =====================

document
.getElementById(
"searchHistory"
)
.addEventListener(

"input",

function(){

const keyword=

this.value
.toLowerCase();

const filtered=

history.filter(item=>

(item.title||"")

.toLowerCase()

.includes(keyword)

||

(item.chapter||"")

.toLowerCase()

.includes(keyword)

);

renderHistory(filtered);

}

);

// =====================
// FIRST LOAD
// =====================

renderHistory(history);

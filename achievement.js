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
// LOAD DATA
// =====================

const history=

JSON.parse(

localStorage.getItem(
"infinite_x_history"
)

)||[];

const favorites=

JSON.parse(

localStorage.getItem(
"infinite_x_favorite"
)

)||[];


// =====================
// ACHIEVEMENTS
// =====================

const achievements=[

{
icon:"🥇",
title:"First Reader",
description:"Read your first chapter.",
target:1,
type:"history"
},

{
icon:"📚",
title:"Bookworm",
description:"Read 10 chapters.",
target:10,
type:"history"
},

{
icon:"🏆",
title:"Rising Reader",
description:"Read 25 chapters.",
target:25,
type:"history"
},

{
icon:"⭐",
title:"Comic Fan",
description:"Read 50 chapters.",
target:50,
type:"history"
},

{
icon:"💎",
title:"Expert Reader",
description:"Read 100 chapters.",
target:100,
type:"history"
},

{
icon:"🔥",
title:"Dedicated Reader",
description:"Read 250 chapters.",
target:250,
type:"history"
},

{
icon:"👑",
title:"Master Reader",
description:"Read 500 chapters.",
target:500,
type:"history"
},

{
icon:"🚀",
title:"Infinite Reader",
description:"Read 1000 chapters.",
target:1000,
type:"history"
},

{
icon:"❤️",
title:"Favorite Collector",
description:"Add 10 comics to Favorite.",
target:10,
type:"favorite"
},

{
icon:"🌟",
title:"Super Fan",
description:"Add 50 comics to Favorite.",
target:50,
type:"favorite"
}

];


// =====================
// RENDER
// =====================

function renderAchievements(){

const grid=

document.getElementById(
"achievementGrid"
);

grid.innerHTML="";

achievements.forEach(achievement=>{

let progress=

achievement.type==="history"

?

history.length

:

favorites.length;

let unlocked=

progress>=achievement.target;

let displayProgress=

Math.min(
progress,
achievement.target
);

grid.innerHTML+=`

<div
class="achievement-card
${unlocked ? "unlocked" : "locked"}"
>

<div class="achievement-icon">

${achievement.icon}

</div>

<h3>

${achievement.title}

</h3>

<p>

${achievement.description}

</p>

<span class="achievement-status">

${displayProgress} / ${achievement.target}

</span>

<p>

${unlocked ? "✅ Unlocked" : "🔒 Locked"}

</p>

</div>

`;

});

}


// =====================
// START
// =====================

renderAchievements();

// ========================================
// INFINITE X - WALLPAPER
// ========================================


// LIGHT WALLPAPER

document.getElementById("lightButton").onclick = function () {

    localStorage.setItem(
        "infinite_x_wallpaper",
        "light"
    );

    applyWallpaper();

};


// DARK WALLPAPER

document.getElementById("darkButton").onclick = function () {

    localStorage.setItem(
        "infinite_x_wallpaper",
        "dark"
    );

    applyWallpaper();

};


// UPLOAD WALLPAPER

document.getElementById("wallpaperUpload").onchange = function (event) {

    let file = event.target.files[0];

    if (!file) {
        return;
    }


    if (!file.type.startsWith("image/")) {

        alert("Please choose an image.");

        return;

    }


    let reader = new FileReader();


    reader.onload = function (e) {

        localStorage.setItem(
            "infinite_x_wallpaper",
            e.target.result
        );

        applyWallpaper();

    };


    reader.readAsDataURL(file);

};


// APPLY WALLPAPER

function applyWallpaper() {

    let wallpaper = localStorage.getItem(
        "infinite_x_wallpaper"
    );


    if (!wallpaper) {

        return;

    }


    if (wallpaper === "light") {

        document.body.style.background =
        "linear-gradient(135deg,#ffffff,#eeeeee)";

        document.body.style.color =
        "#111827";

        return;

    }


    if (wallpaper === "dark") {

        document.body.style.background =
        "linear-gradient(135deg,#111827,#050505)";

        document.body.style.color =
        "#ffffff";

        return;

    }


    if (wallpaper.startsWith("data:image")) {

        document.body.style.backgroundImage =
        `url("${wallpaper}")`;

        document.body.style.backgroundSize =
        "cover";

        document.body.style.backgroundPosition =
        "center";

        document.body.style.backgroundAttachment =
        "fixed";

        document.body.style.backgroundRepeat =
        "no-repeat";

    }

}

// RESET WALLPAPER

document.getElementById("resetWallpaper").onclick = function () {

    localStorage.removeItem(
        "infinite_x_wallpaper"
    );

    location.reload();

};
// LOAD SAVED WALLPAPER

applyWallpaper();

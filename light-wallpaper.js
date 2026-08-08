// ========================================
// INFINITE X - LIGHT WALLPAPER
// FIREBASE
// ========================================

import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
}
from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";


// ========================================
// FIREBASE CONFIG
// ========================================

const firebaseConfig = {

    apiKey:
    "AIzaSyBxksahQKfodVKIbuSFGGhJt7RCAuveT5Y",

    authDomain:
    "infinite-x-f37a2.firebaseapp.com",

    projectId:
    "infinite-x-f37a2",

    storageBucket:
    "infinite-x-f37a2.firebasestorage.app",

    messagingSenderId:
    "32543278362",

    appId:
    "1:32543278362:web:54e231f17c92596888d8a3"

};


const app =
initializeApp(firebaseConfig);

const db =
getFirestore(app);


// ========================================
// GET CURRENT USER
// ========================================

const profile =
JSON.parse(
    localStorage.getItem(
        "infinite_x_profile"
    )
);


// ========================================
// CHECK USER
// ========================================

if (!profile || !profile.name) {

    console.log(
        "No profile found."
    );

}


// ========================================
// USER ID
// ========================================

const userId =
profile?.uid ||
profile?.email ||
profile?.name;


// ========================================
// WALLPAPER BUTTONS
// ========================================

const buttons =
document.querySelectorAll(
    ".use-wallpaper"
);


buttons.forEach(button => {

    button.addEventListener(
        "click",
        async () => {

            const wallpaper =
            button.dataset.wallpaper;


            if (!userId) {

                alert(
                    "Please login first."
                );

                return;

            }


            try {

                // =========================
                // SAVE TO FIRESTORE
                // =========================

                await setDoc(

                    doc(
                        db,
                        "users",
                        userId
                    ),

                    {

                        wallpaper: wallpaper,

                        wallpaperType:
                        "light"

                    },

                    {
                        merge: true
                    }

                );


                // =========================
                // SELECTED STYLE
                // =========================

                document
                .querySelectorAll(
                    ".light-card"
                )
                .forEach(card => {

                    card.classList.remove(
                        "selected"
                    );

                });


                button
                .closest(
                    ".light-card"
                )
                .classList.add(
                    "selected"
                );


                alert(
                    "Light wallpaper selected!"
                );


            }

            catch (error) {

                console.error(
                    "Firebase error:",
                    error
                );

                alert(
                    "Failed to save wallpaper."
                );

            }

        }
    );

});


// ========================================
// LOAD SAVED WALLPAPER
// ========================================

async function loadWallpaper() {

    if (!userId) {
        return;
    }


    try {

        const userDoc =
        await getDoc(

            doc(
                db,
                "users",
                userId
            )

        );


        if (!userDoc.exists()) {
            return;
        }


        const data =
        userDoc.data();


        if (
            data.wallpaperType !==
            "light"
        ) {

            return;

        }


        const savedWallpaper =
        data.wallpaper;


        buttons.forEach(button => {

            if (
                button.dataset.wallpaper ===
                savedWallpaper
            ) {

                button
                .closest(
                    ".light-card"
                )
                .classList.add(
                    "selected"
                );

            }

        });


    }

    catch (error) {

        console.error(
            "Failed to load wallpaper:",
            error
        );

    }

}


// ========================================
// START
// ========================================

loadWallpaper();

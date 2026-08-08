// =====================
// DEV PANEL
// =====================

if(localStorage.getItem("developerLogged")==="true"){

document.getElementById("devButton").style.display="block";

}

// ========================================
// INFINITE X - LIGHT WALLPAPER
// MEMBER + DEV
// FIREBASE FIRESTORE
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
// FIREBASE
// ========================================

const firebaseConfig = {
    apiKey: "AIzaSyBxksahQKfodVKIbuSFGGhJt7RCAuveT5Y",
    authDomain: "infinite-x-f37a2.firebaseapp.com",
    projectId: "infinite-x-f37a2",
    storageBucket: "infinite-x-f37a2.firebasestorage.app",
    messagingSenderId: "32543278362",
    appId: "1:32543278362:web:54e231f17c92596888d8a3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// ========================================
// FIND LOGGED-IN USER FROM LOCALSTORAGE
// ========================================

function getLoggedInUser() {

    for (let i = 0; i < localStorage.length; i++) {

        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        if (!value) continue;

        try {

            const data = JSON.parse(value);

            if (!data || typeof data !== "object")
                continue;

            // Member / Dev session
            if (
                data.uid ||
                data.userId ||
                data.email ||
                data.username ||
                data.name
            ) {

                return data;

            }

        } catch {

            // bukan JSON, lanjut
        }
    }

    return null;
}


const currentUser = getLoggedInUser();


// ========================================
// USER ID
// ========================================

const userId =
    currentUser?.uid ||
    currentUser?.userId ||
    currentUser?.email ||
    currentUser?.username ||
    currentUser?.name;


// ========================================
// LOGIN CHECK
// ========================================

if (!userId) {

    alert("Please login first.");

    window.location.href = "login.html";

}


// ========================================
// WALLPAPER BUTTONS
// ========================================

const buttons =
    document.querySelectorAll(".use-wallpaper");


buttons.forEach(button => {

    button.addEventListener("click", async () => {

        const wallpaper =
            button.dataset.wallpaper;

        if (!userId)
            return;


        try {

            // =================================
            // SAVE MEMBER WALLPAPER SELECTION
            // FIELD TERPISAH
            // AGAR TIDAK MENIMPA DATA DEV LAMA
            // =================================

            await setDoc(

                doc(
                    db,
                    "users",
                    String(userId)
                ),

                {

                    selectedWallpaper: {
                        name: wallpaper,
                        type: "light",
                        source: "member"
                    }

                },

                {
                    merge: true
                }

            );


            // =================================
            // VISUAL SELECTED
            // =================================

            document
                .querySelectorAll(".light-card")
                .forEach(card => {

                    card.classList.remove("selected");

                });


            button
                .closest(".light-card")
                .classList.add("selected");


        }

        catch (error) {

            console.error(
                "Firebase wallpaper error:",
                error
            );

            alert(
                "Failed to save wallpaper."
            );

        }

    });

});


// ========================================
// LOAD SAVED WALLPAPER
// ========================================

async function loadWallpaper() {

    if (!userId)
        return;


    try {

        const userDoc =
            await getDoc(
                doc(
                    db,
                    "users",
                    String(userId)
                )
            );


        if (!userDoc.exists())
            return;


        const data =
            userDoc.data();


        const selected =
            data.selectedWallpaper;


        if (!selected)
            return;


        if (selected.type !== "light")
            return;


        buttons.forEach(button => {

            if (
                button.dataset.wallpaper ===
                selected.name
            ) {

                button
                    .closest(".light-card")
                    .classList.add("selected");

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

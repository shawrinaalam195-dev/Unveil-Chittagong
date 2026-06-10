
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyALNMNdmZ8AnMiUxmHc6QZArQmGDS67osE",
    authDomain: "unveil-ctg.firebaseapp.com",
    projectId: "unveil-ctg",
    storageBucket: "unveil-ctg.firebasestorage.app",
    messagingSenderId: "938479072237",
    appId: "1:938479072237:web:3f203f0048a28d86666de4",
    measurementId: "G-7KCG5MQY57"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("✅ scripts.js is loaded successfully!");

async function loadTouristSpots() {
    const querySnapshot = await getDocs(collection(db, "tourist_spots"));
    let container = document.querySelector(".row");
    container.innerHTML = "";

    querySnapshot.forEach((doc) => {
        let data = doc.data();
        let placeHTML = `
            <div class="image">
                <img src="${data.imageURL}" alt="${data.title}">
                <div class="details">
                    <h2>${formatTitle(data.title)}</h2>
                    <p>"${data.description}"</p>
                    <div class="more">
                        <a href="${data.link}" class="read-more">Read<span>More</span></a>
                        <div class="icon-links">
                            <a href="#"><i class="fa-solid fa-heart"></i></a>
                            <a href="#"><i class="fa-solid fa-eye"></i></a>
                            <a href="#"><i class="fa-solid fa-paperclip"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += placeHTML;
    });
}

function formatTitle(title) {
    let words = title.split(" ");
    if (words.length > 1) {
        return `${words[0]} <span>${words.slice(1).join(" ")}</span>`;
    }
    return `<span>${title}</span>`;
}

window.onload = loadTouristSpots;

// const messages = [
//     "You deserve all the happiness in the world! 🌻",
//     "May your day bloom with beautiful moments! 🌷",
//     "Never stop being your wonderful self! 🌸",
//     "A little sunshine for your beautiful day! 🌼",
//     "Keep growing, keep glowing! 🌹"
// ];
//
// function openGarden() {
//     document.getElementById("welcome").classList.add("hidden");
//     document.getElementById("garden").classList.remove("hidden");
// }
//
// function showMessage(index) {
//     document.getElementById("message").textContent =
//         messages[index];
// }
//
// function finalSurprise() {
//     document.getElementById("garden").classList.add("hidden");
//     document.getElementById("final").classList.remove("hidden");
// }
//
// function goBack() {
//     document.getElementById("final").classList.add("hidden");
//     document.getElementById("garden").classList.remove("hidden");
// }
// ==================================================================================================================

// =============================
// BLOOM GARDEN - SNEHAL
// =============================

// Flower messages

const messages = [
    "You deserve all the happiness in the world! 🌻",

    "May your day bloom with beautiful moments! 🌷",

    "Never stop being your wonderful self! 🌸",

    "Sending a little sunshine to brighten your day! 🌼",

    "Keep growing, keep glowing! 🌹",

    "Every flower blooms in its own beautiful way. Just like you! 💐"
];


// Open Garden

function openGarden() {

    document.getElementById("welcome")
        .classList.add("hidden");

    document.getElementById("garden")
        .classList.remove("hidden");

}


// Show Flower Message


function showMessage(index, flowerElement) {

    const messageBox = document.getElementById("message");

    if (index >= 0 && index < messages.length) {

        // Show selected flower message
        messageBox.textContent = messages[index];

        // Remove previous animation
        document.querySelectorAll(".flower").forEach(flower => {
            flower.classList.remove("bloom");
        });

        // Restart blooming animation
        void flowerElement.offsetWidth;

        flowerElement.classList.add("bloom");

    }

}



// Final Surprise

function finalSurprise() {

    document.getElementById("garden")
        .classList.add("hidden");

    document.getElementById("final")
        .classList.remove("hidden");

}


// Go Back To Garden

function goBack() {

    document.getElementById("final")
        .classList.add("hidden");

    document.getElementById("garden")
        .classList.remove("hidden");

}


// Floating Flower Decorations

function createFloatingFlowers() {

    const decoration = document.getElementById("decoration");

    const flowers = ["🌸", "🌷", "🌼", "✨"];

    for (let i = 0; i < 15; i++) {

        const flower = document.createElement("span");

        flower.className = "floating-flower";

        flower.textContent =
            flowers[Math.floor(Math.random() * flowers.length)];

        flower.style.left = Math.random() * 100 + "%";

        flower.style.animationDelay = Math.random() * 12 + "s";

        flower.style.animationDuration =
            (10 + Math.random() * 8) + "s";

        decoration.appendChild(flower);

    }

}


// Start Decorations

createFloatingFlowers();

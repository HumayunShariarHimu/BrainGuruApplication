var wordsToType = document.querySelector("span[words]").getAttribute("words").split(','),
    typer = document.querySelector("span[words]"),
    typingSpeed = parseInt(typer.getAttribute('typing-speed')) || 70,
    typingDelay = parseInt(typer.getAttribute('typing-delay')) || 700;

var currentWordIndex = 0,
    currentCharacterIndex = 0,
    isPaused = false; // Control variable for play/pause

function type() {
    if (isPaused) return; // Stop if paused
    var wordToType = wordsToType[currentWordIndex % wordsToType.length];
    if (currentCharacterIndex < wordToType.length) {
        typer.innerHTML += wordToType[currentCharacterIndex++];
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, typingDelay);
    }
}

function erase() {
    if (isPaused) return; // Stop if paused
    var wordToType = wordsToType[currentWordIndex % wordsToType.length];
    if (currentCharacterIndex > 0) {
        typer.innerHTML = wordToType.substr(0, --currentCharacterIndex);
        setTimeout(erase, typingSpeed);
    } else {
        currentWordIndex++;
        setTimeout(type, typingDelay);
    }
}

// Play button functionality
document.getElementById("play").onclick = function () {
    if (isPaused) {
        isPaused = false; // Resume
        type(); // Call the type function to continue
    }
};

// Pause button functionality
document.getElementById("pause").onclick = function () {
    isPaused = true; // Pause the typing effect
};

// Start the typing effect on page load
window.onload = function () {
    type();
};
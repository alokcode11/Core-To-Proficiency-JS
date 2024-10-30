let speech = new SpeechSynthesisUtterance(); // Create a new SpeechSynthesisUtterance instance
let voices = []; // Array to hold available voices
let voiceSelect = document.querySelector("select"); // Get the select element for voice options

// Function to populate voices in the dropdown
function populateVoiceList() {
    voices = window.speechSynthesis.getVoices(); // Get available voices

    if (voices.length === 0) {
        console.error("No voices found.");
        return;
    }

    // Clear existing options in the dropdown
    voiceSelect.innerHTML = '';

    // Populate the select element with available voices
    voices.forEach((voice, i) => {
        let option = document.createElement("option");
        option.value = i; // Set the option value to the index
        option.text = `${voice.name} (${voice.lang})`; // Show the voice name and language
        voiceSelect.appendChild(option);
    });

    // Set default voice to the first voice in the list
    speech.voice = voices[0];
    console.log("Voices loaded successfully.");
}

// Call populateVoiceList on load
populateVoiceList();

// If voices haven't loaded yet, listen for onvoiceschanged event
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

// Event listener to change the selected voice
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value]; // Set the voice to the selected option
    console.log(`Selected voice: ${speech.voice.name}`);
});

// Event listener for the "Listen" button
document.querySelector("button").addEventListener("click", () => {
    let text = document.querySelector("textarea").value; // Get text from textarea

    if (text.trim() === '') {
        alert("Please enter some text to speak.");
        return;
    }

    speech.text = text; // Set the speech text
    window.speechSynthesis.speak(speech); // Speak the text
    console.log(`Speaking: "${text}" with voice: ${speech.voice.name}`);
});

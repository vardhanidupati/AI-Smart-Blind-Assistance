const startButton = document.getElementById("startButton");
const status = document.getElementById("status");
const objectName = document.getElementById("objectName");
const confidence = document.getElementById("confidence");


startButton.addEventListener("click", function () {

    status.textContent = "Status: AI Assistant Started";

    startButton.textContent = "AI Assistant Running";

    // Temporary demo result
    setTimeout(function () {

        objectName.textContent = "Object: Dog";

        confidence.textContent = "Confidence: 68%";

        speak("Dog detected with 68 percent confidence.");

    }, 1000);

});


function speak(message) {

    if ("speechSynthesis" in window) {

        const speech = new SpeechSynthesisUtterance(message);

        speech.lang = "en-US";

        window.speechSynthesis.speak(speech);

    } else {

        alert(message);

    }
}

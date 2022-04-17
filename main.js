Telegram.WebApp.ready();
const mainButton = document.querySelector(".main-button");
const mainInput = document.querySelector(".main-input");

function sendHandler() {
    Telegram.WebApp.sendData(mainInput.value);
}

mainButton.addEventListener("click", sendHandler);
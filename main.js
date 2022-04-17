const displayTelegramObject = document.querySelector(".main-button");

function sendHandler() {
    Telegram.WebApp.sendData("alish");
}

displayTelegramObject.addEventListener("click", sendHandler);
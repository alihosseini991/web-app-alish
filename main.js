const displayTelegramObject = document.querySelector(".main-button");

function sendHandler() {
    Telegram.WebApp.close();
}

displayTelegramObject.addEventListener("click", sendHandler);
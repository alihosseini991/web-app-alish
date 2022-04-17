const displayTelegramObject = document.querySelector(".main-button");

function sendHandler() {
    window.Telegram.WebApp.sendData({
        test: "test 1",
    });
}

displayTelegramObject.addEventListener("click", sendHandler);
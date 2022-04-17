const displayTelegramObject = document.querySelector("#telegram-objects");
const telegramObject = JSON.stringify(window.Telegram.WebApp, null, 2);
displayTelegramObject.innerHTML = telegramObject;
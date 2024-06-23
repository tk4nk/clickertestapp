// console.log(window.Telegram.WebApp.colorScheme);
let balance = 0;

document.getElementById('btn').onclick = click;

function click() {
    balance++;
    document.getElementById('bal').innerHTML = `clicks: ${balance}`;
}
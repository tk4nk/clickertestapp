let tg = window.Telegram;
if (tg != undefined) {
    if (tg.WebApp != undefined && tg.WebApp.initData != undefined) {
        let data = tg.WebApp.initData;

        console.log(data)
        console.log("используется тг клиент");
        tg.WebApp.backgroundColor = '#3d3d3d';
        tg.WebApp.headerColor = '#212121';
        tg.WebApp.expand();
    }
} else {
    console.log("используется не тг клиент");
}

// console.log(window.Telegram.WebApp.colorScheme);
let balance = 0;

document.getElementById('btn').onclick = click;

function click() {
    let audio = new Audio("click.mp3");
    audio.play();
    
    balance++;
    document.getElementById('bal').innerHTML = `balance: ${balance}`;
    
    setTimeout(() => {
        document.getElementById('btn').style.transform = "none";
    }, 250);
    
    
    document.getElementById('btn').style.transform = "scale(0.94)";
}
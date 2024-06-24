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
function randomHexGenerate(){
    const start = Math.floor(Math.random() * 15 + 1 );
    const increment = Math.floor(Math.random() * 15 + 1 );
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = start; color.length < 7; i = (i+increment)%15) {
        color += hex[i];
    }

    return color;
}

function changeBG(){
    const hexcode = randomHexGenerate();
    document.querySelector('body').style.backgroundColor = hexcode;
}

const start = document.getElementById('start');
const stop = document.getElementById('stop');
let interval;

start.addEventListener('click', function(){
    if (!interval)
        interval = setInterval(changeBG, 1000);
})

stop.addEventListener('click', function(){
    clearInterval(interval);
    interval = null;
})


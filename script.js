const cookie = document.getElementById('cookie');
let score = 0;

const showScore = document.getElementById('score');
cookie.addEventListener('click', ()=>{
    score++;
    showScore.innerHTML= score;
    animate_bmb(cookie, 0.2, 20);
    
    if(score == 20){
        alert("Win_condition hit");
    }
});

function sqrt(num) {
    if (num < 0) {
        return -1.0; 
    }

    if (num == 0 || num == 1)
        return num;

    x = num;
    y = 1.0;
    epsilon = 0.001; // desired prescision

    while (x - y > epsilon) {
        x = (x + y) / 2;
        y = num / x;
    }

    return x;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animate_bmb(Src, amt, animation_cycles) { // janky ass diy animation system
    for (let i = 0; i<animation_cycles; i++) {
        Src.style.padding = Src.style.padding = `${i * amt / 1}rem`; 
        await sleep(1);
    }

    for (let i = animation_cycles; i>3; i--) {
        Src.style.padding = Src.style.padding = `${i * amt / 1}rem`; 
        await sleep(1);
    }
}

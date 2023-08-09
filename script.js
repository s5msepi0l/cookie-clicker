const up_pn = document.getElementById("pn");
const up_csa = document.getElementById("csa");
const up_lye = document.getElementById("lye");
const up_sbc = document.getElementById("sbc");

const cookie = document.getElementById('cookie');

let money = 0;
let money_gen = 1;

const showScore = document.getElementById('amt');
const level = document.getElementById("level");

cookie.addEventListener('click', ()=>{
    money += money_gen;
    showScore.innerHTML= money;
    animate_bmb(cookie, 0.2, 10);
    
    if(money == 20){
        alert("Win_condition hit");
    }
});

// upgrade boilerplate
const green = "rgb(37, 242, 10)";
const red ="rgb(242, 10, 49)";

up_pn.addEventListener("click", ()=> {
    if (money >= 100) {
        up_pn.style.backgroundColor = green;
        money_gen += 5;
        money -= 100;
        showScore.innerHTML = money;
        level.innerHTML = money_gen;
    }

});

up_sbc.addEventListener("click", ()=> {
    if (money >= 5000) {
        up_sbc.style.backgroundColor = green;
        money_gen += 500;
        money -= 5000;
        showScore.innerHTML = money;
        level.innerHTML = money_gen;
    }
});

up_lye.addEventListener("click", ()=> {
    if (money >= 17.63) {
        up_lye.style.backgroundColor = green;
        money_gen += 1;
        money -= 17.63;
        showScore.innerHTML = money;
        level.innerHTML = money_gen;
    }
});

up_csa.addEventListener("click", ()=> {
    if (money >= 500) {
        up_csa.style.backgroundColor = green;
        money_gen += 50;
        money -= 500;
        showScore.innerHTML = money;
        level.innerHTML = money_gen;
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
        await sleep(0.1);
    }

    for (let i = animation_cycles; i>3; i--) {
        Src.style.padding = Src.style.padding = `${i * amt / 1}rem`; 
        await sleep(0.1);
    }
}


/*function ChangeSearchBar(){
    document.getElementById("search-bar").style.backgroundColor = 'rgb(255, 100, 100)';
    document.getElementById("search-bar").getElementsByClassName("search-bar-input").style.color = 'white';
    document.getElementById("search-bar").getElementsByClassName("search-bar-button").style.color = 'rgb(255, 100, 100)';
    document.getElementById("search-bar").getElementsByClassName("search-bar-button").style.background = 'white';
}

document.getElementsByClassName("search-bar-button").onclick = ChangeSearchBar;*/

let container = document.getElementById("container");
let header = document.getElementsByTagName("header");
let blackpepper1= document.getElementById("blackpepper1");
let blackpepper2= document.getElementById("blackpepper2");
let blackpepper3= document.getElementById("blackpepper3");
let blackpepper4= document.getElementById("blackpepper4");
let blackpepper5= document.getElementById("blackpepper5");
let dill1= document.getElementById("dill1");
let dill2= document.getElementById("dill2");
let dill3= document.getElementById("dill3");
let pepper= document.getElementById("pepper");
let pepper2= document.getElementById("pepper2");
let pepper3= document.getElementById("pepper3");
let pepper4= document.getElementById("pepper4");
let tomato= document.getElementById("tomato");
let carrot= document.getElementById("carrot");
let mushrooms= document.getElementById("mushrooms");
let mushrooms2= document.getElementById("mushrooms2");
let mushrooms3= document.getElementById("mushrooms3");
let aubergine= document.getElementById("aubergine");
let aubergine2= document.getElementById("aubergine2");
let aubergine3= document.getElementById("aubergine3");
let salad= document.getElementById("salad");
let onion1= document.getElementById("onion1");
let radish= document.getElementById("radish");
let tencere= document.getElementById("tencere");

window.addEventListener('scroll',function(){
    let scrollY = window.scrollY;
    if(scrollY < 2000){ /*container.offsetHeight-this.screen.height+200*/
        blackpepper1.style.top = scrollY * 0.9 + 100 +'px';
        blackpepper2.style.top = scrollY * 0.8 + 500 +'px';
        blackpepper3.style.top = scrollY * 1 + 200 +'px';
        blackpepper4.style.top = scrollY * 0.7 + 440 +'px';
        blackpepper5.style.top = scrollY * 0.5 + 750 +'px';
        dill1.style.top = scrollY * 0.8 + 210 +'px';
        dill2.style.top = scrollY * 0.9 + 400 +'px';
        dill3.style.top = scrollY * 0.8 + 170 +'px';
        pepper.style.top = scrollY * 0.8 + 100 +'px';
        pepper2.style.top = scrollY * 0.8+ 300 +'px';
        pepper3.style.top = scrollY * 0.9 + 280 +'px';
        pepper4.style.top = scrollY * 0.9 + 140 +'px';
        tomato.style.top = scrollY * 0.75 + 450 +'px';
        carrot.style.top = scrollY * 0.8 + 400 +'px';
        mushrooms.style.top = scrollY * 1 + 180 +'px';
        mushrooms2.style.top = scrollY * 0.8 + 380 +'px';
        mushrooms3.style.top = scrollY * 0.7 + 630 +'px';
        aubergine.style.top = scrollY * 0.6 + 650 +'px';
        aubergine2.style.top = scrollY * 0.9 + 50 +'px';
        aubergine3.style.top = scrollY * 0.6 + 370 +'px';
        salad.style.top = scrollY * 0.85 + 530 +'px';
        onion1.style.top = scrollY * 0.62 + 800 +'px';
        radish.style.top = scrollY * 0.63 + 730 +'px';
    }
})

window.addEventListener("load",SettingScale);
function SettingScale() {
blackpepper1.style.height = 15.7894 * screen.width / 100 +"px";
blackpepper2.style.height = 15.7894 * screen.width / 100 +"px";
blackpepper3.style.height = 15.7894 * screen.width / 100 +"px";
blackpepper4.style.height = 15.7894 * screen.width / 100 +"px";
dill1.style.height = 21.0526 * screen.width / 100 +"px";
dill2.style.height = 13.1578 * screen.width / 100 +"px";
dill3.style.height = 13.1578 * screen.width / 100 +"px";
pepper.style.height = 15.7894 * screen.width / 100 +"px";
pepper2.style.height = 21.0526 * screen.width / 100 +"px";
pepper3.style.height = 13.1578 * screen.width / 100 +"px";
pepper4.style.height = 15.7894 * screen.width / 100 +"px";
tomato.style.height = 18.9473 * screen.width / 100 +"px";
carrot.style.height = 26.3157 * screen.width / 100 +"px";
mushrooms.style.height = 7.8947 * screen.width / 100 +"px";
mushrooms2.style.height = 7.8947 * screen.width / 100 +"px";
mushrooms3.style.height = 7.8947 * screen.width / 100 +"px";
aubergine.style.height = 10.5263 * screen.width / 100 +"px";
aubergine2.style.height = 10.5263 * screen.width / 100 +"px";
aubergine3.style.height = 10.5263 * screen.width / 100 +"px";
salad.style.height = 15.7894 * screen.width / 100 +"px";    
onion1.style.height = 15.7894 * screen.width / 100 +"px";
radish.style.height = 15.7894 * screen.width / 100 +"px";
};

window.addEventListener("load",SettingRotate);
function SettingRotate() {
    /*Rastgele rotasyonlu yapacaksın*/
};
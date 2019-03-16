
const aralik = 20;
var noktaSayisi = 1;
function obeb(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

function uzaklikKontrolu(x, y, aX, bY) {
    controller = false;
    let index;
    for (index = 0; index <= noktaSayisi; index++) {
        if (aralik*aralik < (x[index] - aX) * (x[index] - aX) + (y[index] - bY) * (y[index] - bY)) {
            controller = true;
            break;
        }
    }
    return controller;
}

function noktaYaratici(x, y, obebSayisi, boyutX, maxNokta, index) {
    let aX;
    let bY;
    let is_okey = false;

    for (let i = 0; i < maxNokta; i++) {
        do {
            aX = (Math.floor(Math.random() * boyutX));
            bY = (Math.floor(Math.random() * obebSayisi) + ((index * obebSayisi) - obebSayisi));
            is_okey = uzaklikKontrolu(x, y, aX, bY);
        } while (!is_okey);
        x[noktaSayisi] = aX;
        y[noktaSayisi] = bY;
        noktaSayisi++;
    }

}



function main() {
    var boyutX = 400;
    var boyutY = 300;
    var x = [];
    var y = [];

    var obebSayisi = obeb(boyutX, boyutY)
    var maxNokta = boyutX / obebSayisi;
    var alanSayisi = boyutY / obebSayisi;
    x[0] = (Math.floor(Math.random() * boyutX));
    y[0] = (Math.floor(Math.random() * (boyutY / alanSayisi)));
    for (let index = 1; index <= alanSayisi; index++) {
        noktaYaratici(x, y, obebSayisi, boyutX, maxNokta, index);
    }
    console.log(alanSayisi);
    console.log(x, y);
    document.getElementById("p1").style.left = x[0].toString()+"px";
    document.getElementById("p1").style.top = y[0].toString()+"px";
    document.getElementById("p2").style.left = x[1].toString()+"px";
    document.getElementById("p2").style.top = y[1].toString()+"px";
    document.getElementById("p3").style.left = x[2].toString()+"px";
    document.getElementById("p3").style.top = y[2].toString()+"px";
    document.getElementById("p4").style.left = x[3].toString()+"px";
    document.getElementById("p4").style.top = y[3].toString()+"px";
    document.getElementById("p5").style.left = x[4].toString()+"px";
    document.getElementById("p5").style.top = y[4].toString()+"px";
    document.getElementById("p6").style.left = x[5].toString()+"px";
    document.getElementById("p6").style.top = y[5].toString()+"px";
    document.getElementById("p7").style.left = x[6].toString()+"px";
    document.getElementById("p7").style.top = y[6].toString()+"px";
    document.getElementById("p8").style.left = x[7].toString()+"px";
    document.getElementById("p8").style.top = y[7].toString()+"px";
    document.getElementById("p9").style.left = x[8].toString()+"px";
    document.getElementById("p9").style.top = y[8].toString()+"px";
    document.getElementById("p10").style.left = x[9].toString()+"px";
    document.getElementById("p10").style.top = y[9].toString()+"px";
    document.getElementById("p11").style.left = x[10].toString()+"px";
    document.getElementById("p11").style.top = y[10].toString()+"px";
    document.getElementById("p12").style.left = x[11].toString()+"px";
    document.getElementById("p12").style.top = y[11].toString()+"px";
    document.getElementById("p13").style.left = x[12].toString()+"px";
    document.getElementById("p13").style.top = y[12].toString()+"px";
    
}

main();
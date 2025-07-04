function addition(a,b) {
    return a + b;
}

function division (x,y){
    if (y === 0) {
        throw new Error ("Division par 0 est interdite");
    }
    return x / y;
}

function aireRectangle (longueur, largeur){
    return longueur*largeur
}

function puissance3(z){
    return z**3
}

module.exports  = {addition, division, aireRectangle, puissance3}
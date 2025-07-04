function addition(a,b) {
    return a + b;
}

function division (x,y){
    if (y === 0) {
        throw new Error ("Division par 0 est interdite");
    }
    return x / y;
}

module.exports  = {addition, division}
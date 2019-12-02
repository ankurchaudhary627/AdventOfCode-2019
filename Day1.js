let fuelData = require('./fuelData.json');

function calcFuel(){
    var reqdFuel=0;
    for(var idx in fuelData){
        reqdFuel+=Math.floor(Number(fuelData[idx])/3)-2;
    }
    return reqdFuel;
}

console.log(calcFuel());
let fuelData = require('./fuelData.json');

function calcFuel(fuel){
    var value = Math.floor(Number(fuel)/3)-2;
    return value > 0 ? value : 0;
}

function calcRecursiveFuel(){
    
    var fuelArray = [];

    for(var idx in fuelData){

        var reqdFuel=0;
        var currFuel=fuelData[idx];
        
        while(currFuel>0){
            currFuel=calcFuel(currFuel);
            reqdFuel+=currFuel;
        }
        
        fuelArray.push(reqdFuel);
    }
    return fuelArray.reduce((a,b) => a + b, 0);
}

var singleFuel=0;

for(var idx in fuelData){
    singleFuel+=calcFuel(fuelData[idx]);
}
console.log(singleFuel);

console.log(calcRecursiveFuel());
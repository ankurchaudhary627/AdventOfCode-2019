const input=[1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,19,6,23,2,6,23,27,2,27,9,31,1,5,31,35,1,35,10,39,2,39,9,43,1,5,43,47,2,47,10,51,1,51,6,55,1,5,55,59,2,6,59,63,2,63,6,67,1,5,67,71,1,71,9,75,2,75,10,79,1,79,5,83,1,10,83,87,1,5,87,91,2,13,91,95,1,95,10,99,2,99,13,103,1,103,5,107,1,107,13,111,2,111,9,115,1,6,115,119,2,119,6,123,1,123,6,127,1,127,9,131,1,6,131,135,1,135,2,139,1,139,10,0,99,2,0,14,0];

function OpCodes(array,idx1,idx2){
    var idx=0;
    var halt=false;

    array[1]=idx1;
    array[2]=idx2;

    while(idx<array.length){

        switch(array[idx])
        {
            case 1: add(array.slice(idx+1,idx+4),array); break;
            case 2: multiply(array.slice(idx+1,idx+4),array); break;
            case 99: halt=true; break;
            default: return "invalid choice";
        }
        
        if(halt) break;        
        idx+=4;
    }
    return array[0];
    // console.log(input[0]);
};

(function(){
    var noun=undefined, verb=undefined;
    for(var i=1;i<99;i++)
    {
        for(var j=1;j<99;j++)
        {
            if(OpCodes([...input],i,j)==19690720)
            {
                noun=i;
                verb=j;
                break;
            }
        }
        if(verb!=undefined && noun!=undefined) break;
    }
    console.log("ans is :",100*noun+verb);
})();

function add(idxArray,tempArray){
    tempArray[idxArray[2]]=tempArray[idxArray[0]]+tempArray[idxArray[1]];
}

function multiply(idxArray,tempArray){
    tempArray[idxArray[2]]=tempArray[idxArray[0]]*tempArray[idxArray[1]];
}
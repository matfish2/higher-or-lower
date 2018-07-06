export default function(prevVal, curVal, dir) {

    prevVal = getNumericValue(prevVal);
    curVal = getNumericValue(curVal);

   return dir===1?curVal>=prevVal:curVal<=prevVal;
}

function getNumericValue(val) {
    const valsLookup = {
        'A':1,
        'J':11,
        'Q':12,
        'K':13
    } 
    if (!valsLookup.hasOwnProperty(val)) {
        return parseInt(val);
    } 

    return valsLookup[val];

}
function prime_position(x){
    var j=0;
    for(var i=0;i<=500000;i++){
        if(prime_number(i)==true){
            j+=1;
        }
        if(j==x){
            return i;
        }
    }

}
function prime_number(y){
    for (var i = y - 1; i >= 1; i--) {
        if (y % i == 0 && i > 1) {
            return false;
        }
        if (y % i == 0 && i == 1) {
            return true;
        }
    }
}




function sort_subtract(num){
    str = String(num);
    digitsHiToLow = "";
    digitsLowToHi = "";
    array = [""];
    var y = str.length;

    for(var i = 1; i < y + 1; i++){
        array.push(str.substring(i - 1,i));
    }
    //Sorts digits
    array.sort((a,b) => a - b);

    for(var z = array.length - 1; z >= 0; z--){
        digitsLowToHi += array[z];
    }

    for(var x = 0; x < array.length; x++){
        digitsHiToLow += array[x];
    }
    //last calclulation
    var htl = parseInt(digitsHiToLow, 10);
    var lth = parseInt(digitsLowToHi, 10);
    return lth - htl;
}

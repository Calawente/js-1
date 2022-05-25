var arr = [25,10,20,35,6];
function arraySum(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum);
}
arraySum(arr); //96
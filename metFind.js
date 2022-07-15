arr = [2,5,3];
function mayor (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 1) {
            res = array[i];
            break;
        }
    }
    return  res;
}
console.log(mayor(arr));
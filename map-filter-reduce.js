const arr = [1,2,3,4,5];
function sumOfTripledEvens(array) {
    let sum = 0;
    const evenNums = arr.filter(num => num % 2 == 0);
    const tripledEvens = evenNums.map(num => num * 3);
    const sumOftripledEvens = tripledEvens.reduce((total, currentItem) => {
        return total + currentItem;
    });
    return sumOftripledEvens;
}

console.log(sumOfTripledEvens(arr));
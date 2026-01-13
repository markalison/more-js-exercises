let str = "background-color"

arr = str.split("");
console.log(str)

while (arr.includes("-")) {
    let i = arr.findIndex(x => x === "-");
    arr.splice(i,2,arr[i+1].toUpperCase());
}

str = arr.join("");
console.log(str);

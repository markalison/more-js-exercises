let str = "-webkit-trainsitition";

function camelize(str) {
    arr = str.split("");
    while (arr.includes("-")) {
        let i = arr.findIndex(x => x === "-");
        arr.splice(i,2,arr[i+1].toUpperCase());
        str = arr.join("");
    }
    return str;
}

str = camelize(str);
console.log(str);

let marks = [85,97,44,76,37,60];

let sum =0;
for(let val of marks){
    sum = sum +val;
}

let avg = sum/ marks.length;
console.log(`avg marks of the class=${avg}`);
console.log("--------Slice---------");

let str = "Sneha";
let ans = str.slice(0, 2);
console.log(ans); // Output: Sn

console.log("---------Split----------");

let b = "Sneha Buran";
let a = b.split(" ");
console.log(a); // Output: ["Sneha", "Buran"]

console.log("----------Replace-----------");

let bank = "SBI Bank, SBI";
let newbank = bank.replace("SBI", "Telangana");
let newbank1 = bank.replaceAll("SBI", "Telangana");
console.log(newbank);  // Telangana Bank, SBI
console.log(newbank1); // Telangana Bank, Telangana

console.log("---Template Literals, Template Strings-------");

let add1 = `hello I am adding ${1 + 10}`;
console.log(add1); // hello I am adding 11

console.log("--------Includes-----------");

let place = "Uttar Pradesh";
console.log(place.includes(""));   // true
console.log(place.includes(","));  // false
console.log(place.includes("U"));  // true
console.log(place.includes("p"));  // false (case-sensitive)

console.log("--------Ternary Operator--------");

(101 > 101.5) ? console.log("Hello True") : console.log("False");
("sneha" === "sneha") ? console.log("Hello True") : console.log("False");

console.log("------Switch Operator--------");

switch (2) {
    case 1:
        console.log("Don");
        break;
    case 2:
        console.log("Cave");
        break;
    case 3:
        console.log("Hill Top");
        break;
    default:
        console.log("Default");
}

console.log("-----BREAK------");

for (let x = 1; x < 22; x++) {
    if (x === 12) {
        break;
    }
    console.log(x);
}

console.log("------CONTINUE-------");

for (let y = 10; y <= 18; y++) {
    if (y === 14) {
        continue;
    }
    console.log(y);
}

console.log("-------Do While---------");

let xyz = 10;
do {
    console.log(xyz);
    xyz--;
} while (xyz >= 1);

console.log("---------HOISTING-------");

console.log(z); // undefined due to hoisting
var z = 10;

console.log("-----------------");

abcd();

function abcd() {
    console.log("Hello world");
}

const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const A = lines.shift();
const B = lines.shift();
const C = lines.shift();
let result = "";

if (A === "vertebrado") {
    if (B === "ave") {
        result = C === "carnivoro" ? "aguia" : "pomba";
    } else if (B === "mamifero") {
        result = C === "onivoro" ? "homem" : "vaca";
    }
} else if (A === "invertebrado") {
    if (B === "inseto") {
        result = C === "hematofago" ? "pulga" : "lagarta";
    } else if (B === "anelideo") {
        result = C === "hematofago" ? "sanguessuga" : "minhoca";
    }
}

console.log(result);
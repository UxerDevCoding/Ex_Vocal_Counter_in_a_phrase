let phrase = document.getElementById("button_phrase");
phrase.addEventListener('click', vowelCount);

function vowelCount() {
let userPhrase = input_phrase.value;
const reg =/[aeiou]/gi;
let contador = userPhrase.match(reg)
console.log("Vocales encontradas = " + contador);
console.log(contador);
alert("Vocales encontradas = " + contador);
}


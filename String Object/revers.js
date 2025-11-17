//********** reverse *******/

    //Method–1: Built-in
const text = "Rakib Hasan";

const revers = text.split("").reverse("").join("");
console.log(revers);


    //Method–2: For Loop
const text1 = "nasaH bikaR"
let reverse = " ";

for (let i = 0; i < text1.length; i++) {
    const letter = text1[i];
    reverse = letter + reverse
}

console.log(reverse);


        //Method–3: For...of loop
const text2 = "SAKIB HASAN";
let reversed = "";

for (const letter of text2) {
    reversed = letter + reversed;
}

console.log(reversed);


    //Method–4: While Loop

let text3 = "NASAH BIKAS";
let rev = "";
let i = text3.length - 1;

while (i >= 0) {
    rev = rev + text3[i];
    i--;
}

console.log(rev);

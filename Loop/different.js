// Give me the sum of numbers from 1 to 20 that are divisible 3 //

let total = 0;
for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0 ) {
        total = total + i;
    }
}

console.log('total sum of the number is', total);
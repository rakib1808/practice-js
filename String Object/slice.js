        // slice()   //
//**  Syntax (format)
//array.slice(start, end)


const numbers = [10, 20, 30, 40, 50];
const part = numbers.slice(1, 4);
console.log(part);
//array.slice(start, end) start কোন index থেকে শুরু হবে, end কোন index পর্যন্ত যাবে (exclude করবে — মানে end index-এর আগ পর্যন্ত) ।



//..........যদি neg হয়...............//
const fruits = ["apple", "banana", "mango", "orange", "grape"];
console.log(fruits.slice(-3));
//(-3) মানে শেষ দিক থেকে ৩টা উপাদান।


//--------যদি end না দেওয়া হয়----
const letters = ['a', 'b', 'c', 'd', 'e'];
console.log(letters.slice(2));
// index 2 থেকে শুরু করে শেষ পর্যন্ত নিয়ে নেয়।





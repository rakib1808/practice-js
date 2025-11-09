const subject = "Bangla";
const book = "bangla";
//উপরে veriable দুটি একটি upperCase অন্যটি lowerCase তাই IF এর condition পুরন হবে না। if এর condition fullfill করার জন্য if এর condition এর ভিতরে .toLocaleLowerCase() করা হইয়েছে। 

if (subject.toLocaleLowerCase() === book.toLocaleLowerCase()) {
    console.log('I am Reading');
} else {
    console.log('I am not reading');
}



const capital = "Dhaka"
const city = "  Dhaka"
//.trim() ব্যবহার করা হয়, যখন staring এ variabel এ কোন ফাঁকা থাকে string এর কোটেশনের ভিতরে, শুর‍্যতে বা শেষে থাকে, তখন if এর condition সত্য করতে .trim() ব্যবহার করা হইয়েছে, .trim() ব্যবহার করলে ফাঁকা/speces থাকলে তা পুরন করে দেই।
if (capital.trim() === city.trim()) {
    console.log('I living hear');
} else {
    console.log('I not living')
}
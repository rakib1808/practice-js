         //   splice()   //

//splice() হলো এমন একটা method যা দিয়ে তুমি array থেকে —
// নতুন element যোগ করতে পারো, 
//element মুছে ফেলতে পারো,
//এমনকি চাইলে replace (বদলাতে) পারে।

//**  Syntax (format)
// array.splice(start, deleteCount, item1, item2, ...)*/


//element remove করা
const numbers1 = [10, 20, 30, 40, 50];
numbers.splice(1, 2);
console.log(numbers1);

//element যোগ করা
const fruits1 = ["apple", "banana", "mango"];
fruits1.splice(1, 0, "orange", "grape");
//.splice(start, deleteCount, item1, item2, ...)
//start = 1 → index 1 থেকে শুরু (banana-এর আগে)
//deleteCount = 0 → কিছু মুছবে না
//item1, item2 = "orange", "grape" → এই দুইটা যোগ করো
console.log(fruits1);


//মুছে(remove) + যোগ দুইটাই একসাথে
const arr = [100, 200, 300, 400, 500];
arr.splice(2, 1, 700, 800);
// delete item = 1 মানে ১টি element বাদ যাবে, যদি 2  থাকত, তাহলে ২টি উপাদান বাদ যাবে।
console.log(arr);



// splice() যা কেটে ফেলে সেটাই return করে।
const data = [1, 2, 3, 4, 5];
const removed = data.splice(1, 2);
console.log("Removed:", removed);
console.log("New Array:", data);
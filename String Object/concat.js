      // concat
//**  Syntax (format)
//const newArr = arr.concat(value1, value2, ...,); 
//ক বা একাধিক array বা string কে জোড়ার (join বা merge) কাজে লাগে, এবং সেটা করে এমনভাবে যে মূল (Main) Data বদলায় না । 

const a = [1, 2];
const b = [3, 4];

const c = a.concat(b);

console.log(c);



//****nested arrays কিভাবে হ্যান্ডেল করে */

const x = [1, [2,3]];
const y = [4];
const z = x.concat(y);
console.log(z); 




       //**ES6 */
//**spread*/

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];


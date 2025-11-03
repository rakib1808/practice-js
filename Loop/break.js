// let i; লুপের বাইরে console.log করলে এই var বাইরে লিখতে হয়।
for (let i = 0; i <= 10; i++) {
    // console.log(i);  if এর আগে console.log() শর্ত চেকের আগেই চালায় “লুপে ঢুকলেই” মান দেখাবে
    if (i>=5) {
        break
    }
    // console.log(i); if এর পরে console.log() কেবল তখন চালায়, যখন break হয়নি, break হয়ে গেলে ওই লাইন skip হয়
}
// console.log('i:', i);লুপের বাইরে console.log() লুপ শেষ হবার পর একবার চালায় ( ব্লক স্কোপের বাইরে variable না থাকলে error দেয়)




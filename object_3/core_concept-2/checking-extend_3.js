// Checking Existence

//1. in Operator
//এটি অবজেক্টে প্রপার্টি থাকলে true এবং না থাকলে false রিটার্ন করে।

const car = { brand: "Toyota", model: "Corolla" };

console.log("brand" in car);   // Output: true
console.log("price" in car);   // Output: false




//2. hasOwnProperty() Method
// এটি দিয়ে নিশ্চিত হওয়া যায় প্রপার্টিটি সরাসরি ওই অবজেক্টেরই কি না।

const phone = { name: "Samsung", price: 25000 };

console.log(phone.hasOwnProperty("price")); // Output: true
console.log(phone.hasOwnProperty("color")); // Output: false


//practics
const product = {
    Names: "headphone",
    BDT: "1450",
    Color: "black"

}

for (let isb in product){
    console.log(`${isb}: ${product[isb]}`)
}
const value = Object.values(product);
console.log(value);

console.log(product.hasOwnProperty("BDT"))
console.log(product.hasOwnProperty("brand"))

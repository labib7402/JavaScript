// Loops & Iteration (অবজেক্টের ওপর ঘুরে ঘুরে কাজ করা)

//1. for...in Loop (সবচেয়ে সহজ লুপ)
//অবজেক্টের প্রতিটি Key (প্রপার্টির নাম) এক এক করে পাওয়ার জন্য 

const student = {
    name: "Sakib",
    age: 22,
    department: "CSE"
};

for (let ke in student) {
    // key দিয়ে প্রপার্টির নাম এবং student[key] দিয়ে মান পাওয়া যায়
    console.log(`${ke} : ${student[ke]}`);
}

/* Output:
name : Sakib
age : 22
department : CSE
*/




//2. Object.keys()
//অবজেক্টের ভেতর যতগুলো key (নাম) আছে, সবগুলোকে একটি অ্যারে (Array) বানিয়ে দেয়।

const user = { name: "Rahim", role: "Admin", status: "Active" };

const keys = Object.keys(user);

console.log(keys); 
// Output: ['name', 'role', 'status']



//3. Object.values()
//শুধুমাত্র মান (Value) গুলো পেতে

const users = { name: "Rahul", role: "Alamin", status: "sujon" };

const values = Object.values(users);

console.log(values); 
// Output: ['Rahul', 'Alamin', 'sujon']



//4. Object.entries()
//  [Key, Value] জোড়ার অ্যারে পাওয়া

const engr = { name: "Rahim", age: 25 };

const entries = Object.entries(engr);

console.log(entries); 
// Output: [ ['name', 'Rahim'], ['age', 25] ]
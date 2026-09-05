//1. Object.freeze() (সম্পূর্ণ লক করা)

const user = { name: "Sakib", role: "Admin" };

// অবজেক্ট ফ্রিজ করা
Object.freeze(user);

user.role = "Editor";    // কাজ করবে না (পরিবর্তন হবে না)
user.age = 25;           // কাজ করবে না (নতুন প্রপার্টি যোগ হবে না)
delete user.name;        // কাজ করবে না (ডিলিট হবে না)

console.log(user); 
// Output: { name: 'Sakib', role: 'Admin' }

//2. Object.seal() (নতুন প্রপার্টি যোগ বিদ্যমান প্রপার্টি ডিলিট করা যাবে না, কিন্তু মান পরিবর্তন করা যাবে)
const settings = { theme: "dark", fontSize: 16 };

Object.seal(settings);

settings.fontSize = 18;  // ✅ কাজ করবে! (মান আপডেট হবে)
settings.language = "bn"; // ❌ কাজ করবে না (নতুন প্রপার্টি যোগ হবে না)
delete settings.theme;   // ❌ কাজ করবে না (ডিলিট হবে না)

console.log(settings); 
// Output: { theme: 'dark', fontSize: 18 }


//৩. Optional Chaining (?.) (অ্যাপ ক্র্যাশ রোধ করা)

//নেস্টেড অবজেক্টের কোনো প্রপার্টি যদি না থাকে (বা undefined/null হয়),
// তবে সাধারণ ডট নোটেশন কোড ক্র্যাশ করিয়ে দেয় (TypeError)। প্রশ্নবোধক চিহ্নের সাথে ডট (?.)
// ব্যবহার করলে এরর না দিয়ে নিরাপদে undefined রিটার্ন করে।

const employee = {
    name: "Rahim",
    // address প্রপার্টিটি এখানে নেই
};

// ❌ সাধারণ নিয়ম (অ্যাপ ক্র্যাশ করবে):
// console.log(employee.address.city); // TypeError: Cannot read properties of undefined

// 🟢 Optional Chaining (নিরাপদ উপায়):
console.log(employee.address?.city); 
// Output: undefined (অ্যাপ ক্র্যাশ করবে না!)

//৪. Nullish Coalescing Operator (??) (ডিফল্ট ভ্যালু সেট করা)
//যদি কোনো প্রপার্টির মান null বা undefined হয়, তবে ব্যাকআপ হিসেবে একটি Default Value বসানোর জন্য ?? ব্যবহার করা হয়।

const settings = {
    theme: null,
    fontSize: 0
};

// theme না থাকলে (null/undefined হলে) "light" বসবে
const activeTheme = settings.theme ?? "light";
console.log(activeTheme); // Output: light

// OR (||) অপারেটরের সাথে পার্থক্য:
// || অপারেটর 0 বা "" (empty string) কেও false মনে করে চেঞ্জ করে ফেলে।
// কিন্তু ?? শুধু null এবং undefined হলেই কাজ করে।
const currentSize = settings.fontSize ?? 16;
console.log(currentSize); // Output: 0 (কারণ 0 একটি বৈধ মান)
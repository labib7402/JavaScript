//এই প্রজেক্টটিতে আমরা একটি Smart E-Commerce Product & Inventory Management System তৈরি করব।

//এখানে Level 1 থেকে Level 5-এর সমস্ত প্রধান কনসেপ্ট (Nested Objects, Methods, this, Iteration,
// Destructuring, Spread Operator, Shallow vs Deep Copy, Protection, Descriptors, Prototypes, এবং Map/Set)
//  বাস্তবমুখী কোডে প্রয়োগ করা হয়েছে।


// ==========================================
// LEVEL 5: Prototypes & Property Descriptors
// ==========================================

// ১. Base Entity (Prototype definition)
const BaseEntity = {
    getDetails() {
        return `[ID: ${this.id}] ${this.name}`;
    }
};

// ২. Product Constructor Function
function Product(id, name, price, category, tags) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    
    // LEVEL 5: Set - ডুপ্লিকেট ট্যাগ রিমুভ করতে
    this.tags = new Set(tags);

    // LEVEL 5: Property Descriptor (id কে Read-Only বানানো)
    Object.defineProperty(this, "id", {
        writable: false,
        enumerable: true,
        configurable: false
    });
}

// Prototype Link
Product.prototype = Object.create(BaseEntity);


// LEVEL 2: Object Method with ES6 Shorthand & `this`
Product.prototype.getFormattedPrice = function() {
    return `$${this.price.toFixed(2)}`;
};
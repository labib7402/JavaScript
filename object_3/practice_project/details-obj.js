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


// ==========================================
// SYSTEM CORE (Levels 1, 2, 3, 4, 5)
// ==========================================

const InventorySystem = {
    systemName: "TechStore Inventory",
    
    // LEVEL 5: Map - দ্রুত কি-ভ্যালু সার্চিংয়ের জন্য
    productsMap: new Map(),

    // LEVEL 1 & 2: Nested Object & Method
    config: {
        currency: "USD",
        taxRate: 0.10,
        getTax(amount) {
            return amount * this.taxRate;
        }
    },

    // প্রোডাক্ট যোগ করা
    addProduct(product) {
        this.productsMap.set(product.id, product);
    },

    
    // LEVEL 2: Iteration (Object.entries & for...in)
    generateReport() {
        console.log(`\n=== ${this.systemName} Report ===`);
        
        // Map এন্ট্রি ঘুরে দেখা
        for (let [id, product] of this.productsMap.entries()) {
            // LEVEL 3: Destructuring
            const { name, price, category } = product;
            
            // LEVEL 4: Optional Chaining (?.) & Nullish Coalescing (??)
            const discount = product.discountInfo?.percentage ?? 0;
            const finalPrice = price - (price * (discount / 100));

            console.log(`Product: ${name} | Category: ${category} | Base Price: $${price} | Final Price: $${finalPrice}`);
        }
    }
};
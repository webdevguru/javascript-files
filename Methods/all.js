// Sample array of objects
const products = [
  { name: 'Laptop', price: 800, category: 'Electronics' },
  { name: 'Phone', price: 600, category: 'Electronics' },
  { name: 'Shoes', price: 120, category: 'Apparel' },
  { name: 'Watch', price: 150, category: 'Accessories' }
];

// Filter out products that cost more than $200
const expensiveProducts = products.filter(product => product.price > 200);

console.log("Expensive Products:", expensiveProducts);

// Create an array of product names using map
const productNames = products.map(product => product.name);

console.log("Product Names:", productNames);

// Find the first product in the 'Electronics' category
const firstElectronicsProduct = products.find(product => product.category === 'Electronics');

console.log("First Electronics Product:", firstElectronicsProduct);

// Calculate the total price of all products using reduce
const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

console.log("Total Price of Products:", totalPrice);

// Check if any product is in the 'Apparel' category using some
const hasApparel = products.some(product => product.category === 'Apparel');

console.log("Has Apparel:", hasApparel);

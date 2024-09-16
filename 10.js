const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 },
    { name: 'Headphones', price: 100 }
];

const totalCost = products.reduce(function (acc, product) {
    return acc + product.price;
}, 0);

console.log("Total cost:", totalCost);

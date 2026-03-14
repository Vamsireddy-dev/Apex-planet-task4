const products = [
{ name:"Laptop", category:"electronics", price:70000, rating:4.8 },
{ name:"Headphones", category:"electronics", price:2000, rating:4.3 },
{ name:"T-Shirt", category:"fashion", price:799, rating:4.1 },
{ name:"Shoes", category:"fashion", price:2999, rating:4.5 },
{ name:"JavaScript Book", category:"books", price:499, rating:4.7 },
{ name:"Novel", category:"books", price:299, rating:4.0 }
];

let displayedProducts = [...products];

// Display products
function displayProducts(list){
const container = document.getElementById("productContainer");
container.innerHTML = "";

list.forEach(product=>{
container.innerHTML += `
<div class="card">
<h3>${product.name}</h3>
<p>Category: ${product.category}</p>
<p>Price: ₹${product.price}</p>
<p>⭐ Rating: ${product.rating}</p>
</div>
`;
});
}

// Filter products
function filterProducts(){
const category =
document.getElementById("categoryFilter").value;

if(category === "all"){
displayedProducts = [...products];
}else{
displayedProducts =
products.filter(p => p.category === category);
}

displayProducts(displayedProducts);
}

// Sort products
function sortProducts(type){

if(type === "priceLow"){
displayedProducts.sort((a,b)=>a.price-b.price);
}

else if(type === "priceHigh"){
displayedProducts.sort((a,b)=>b.price-a.price);
}

else if(type === "rating"){
displayedProducts.sort((a,b)=>b.rating-a.rating);
}

displayProducts(displayedProducts);
}

// Initial load
displayProducts(displayedProducts);
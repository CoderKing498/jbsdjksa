const products = [

    {ID: 1, name: 'Product1', price: 20000, quantity: 40},
    {ID: 2, name: 'Product2', price: 40000, quantity: 20 },
    {ID: 3, name: 'Product3', price: 80000, quantity: 15 },
    {ID: 4, name: 'Product4', price:160000, quantity: 5 }
]

let carrito = [];

function addToCard(product) {
    carrito.push(product);

    const containerTotal = document.getElementById("container-total");

    const div = document.createElement("div");
    div.className = "product-aggregate";

    div.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Quantity: ${product.quantity}</p>
    `;

    containerTotal.appendChild(div);
    getTotal();
}

function getTotal() {
    let total = 0;
    carrito.forEach(product => total += product.price * product.quantity);
    const totalElement = document.getElementById("total");
    totalElement.textContent = `Total: $${total}`;
    return total;
}

for (const product of products) {
    const div = document.createElement("div");
    const container = document.getElementById("container");

    div.className = "product-item";
    div.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Quantity: ${product.quantity}</p>
        <button >Add to Cart</button>
    `;

    const button = div.querySelector("button");
    button.addEventListener("click", function () {
        addToCard(product);
    });

    container.appendChild(div);
}

const products = [

    {ID: 1, name: 'Product1', price: 20000, quantity: 40},
    {ID: 2, name: 'Product2', price: 40000, quantity: 20 },
    {ID: 3, name: 'Product3', price: 80000, quantity: 15 },
    {ID: 4, name: 'Product4', price:160000, quantity: 5 }
]

let carrito = []

function addToCard(product){
    carrito.push(product);

    const containerTotal = document.getElementById("container-total")

    const div = document.createElement("div")
    div.className = "product-aggregate"

    div.innerHTML = `
    <h3>${product.name}
    `
}


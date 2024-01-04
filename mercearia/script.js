// Lista de produtos da mercearia
const products = [
    { name: "Arroz", price: 15.99 },
    { name: "Feijão", price: 12.00 },
    { name: "Açúcar", price: 4.22 },
    { name: "macarrao", price: 4.99},
    { name: "farinha", price: 3.48},
    { name: "pipoca", price: 4.99},
    { name: "pneu", price: 400},
    // Adicione mais produtos aqui
];

const productList = document.getElementById("product-list");

// Função para preencher a lista de produtos
function renderProductList() {
    productList.innerHTML = "";
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>Preço: R$ ${product.price.toFixed(2)}</p>
        `;
        productList.appendChild(productCard);
    });
}

// Chamando a função para renderizar a lista de produtos
renderProductList();
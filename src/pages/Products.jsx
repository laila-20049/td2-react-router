import React from "react";
import "./Products.css";

const products = [
  {
    id: 1,
    description: "Une fragrance fraîche et élégante.",
    price: "400 DH",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVOtmoAeh79nPqgch1ycu3YDc0OI9wwz-tag&s"
  },
  {
    id: 2,
    description: "Une essence florale et délicate.",
    price: "500 DH",
    image: "https://www.laromemaroc.com/wp-content/uploads/2024/10/LInterdit-Absolu-Eau-de-Parfum-Intense-300x300.jpg"
  },
  {
    id: 3,
    description: "Une senteur boisée et intense.",
    price: "600DH",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDikh6Umw2zlCdkoECBtjra9Ly_20Gi1GAx5VkhNIm14G-PrR2Gc-GfS6e6cixnw-hm8&usqp=CAU"
  },
  {
    id: 4,
    description: "Parfum sucré et sensuel.",
    price: "800 DH",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmjvWia9_agsfvjzJqXzfnrtH0p1u3lC_vw&s"
  }
];

function Products() {
  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">{product.price}</div>
            <button className="btn">Ajouter au panier</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;

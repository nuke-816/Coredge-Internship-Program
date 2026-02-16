import { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const productsData = [
    { id: 1, name: "iPhone 15", category: "Mobile", price: 999 },
    { id: 2, name: "Samsung S24", category: "Mobile", price: 899 },
    { id: 3, name: "MacBook Pro", category: "Laptop", price: 1999 },
    { id: 4, name: "Dell XPS", category: "Laptop", price: 1599 },
    { id: 5, name: "AirPods", category: "Accessories", price: 199 }
  ];

  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? productsData
      : productsData.filter(product => product.category === category);

  return (
    <div className="app-container">
      <h1>Product Catalog</h1>

      <div className="filter-buttons">
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Mobile")}>Mobile</button>
        <button onClick={() => setCategory("Laptop")}>Laptop</button>
        <button onClick={() => setCategory("Accessories")}>Accessories</button>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
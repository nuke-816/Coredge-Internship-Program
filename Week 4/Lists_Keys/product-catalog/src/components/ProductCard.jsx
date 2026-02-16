function ProductCard({ name, price, category }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default ProductCard;

function Card({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px 0",
      borderRadius: "8px"
    }}>
      {children}
    </div>
  );
}

export default Card;

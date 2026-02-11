function Badge({ text }) {
  return (
    <span style={{
      backgroundColor: "orange",
      padding: "5px 10px",
      borderRadius: "12px",
      color: "white"
    }}>
      {text}
    </span>
  );
}

export default Badge;

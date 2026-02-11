function Button({ variant, children }) {

  const styles = {
    primary: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "10px",
      border: "none",
      borderRadius: "6px"
    },
    secondary: {
      backgroundColor: "gray",
      color: "white",
      padding: "10px",
      border: "none",
      borderRadius: "6px"
    }
  };

  return (
    <button style={styles[variant]}>
      {children}
    </button>
  );
}

export default Button;

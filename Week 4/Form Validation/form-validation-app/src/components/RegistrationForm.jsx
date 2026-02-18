import { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
});

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function validate(fieldName, value) {
    let newErrors = { ...errors };

    if (fieldName === "email") {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(value)) {
        newErrors.email = "Invalid email format";
      } else {
        delete newErrors.email;
      }
    }

    if (fieldName === "password") {
      if (value.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      } else {
        delete newErrors.password;
      }
    }

    if (fieldName === "confirmPassword") {
      if (value !== form.password) {
        newErrors.confirmPassword = "Passwords do not match";
      } else {
        delete newErrors.confirmPassword;
      }
    }

    setErrors(newErrors);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });

    validate(name, value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      setSuccess("Registration successful!");
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } else {
      setSuccess("");
    }
  }

  function passwordStrength() {
    if (form.password.length === 0) return "";
    if (form.password.length < 6) return "Weak";
    if (form.password.length < 8) return "Medium";
    return "Strong";
  }

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        {form.password && (
          <p className="strength">Strength: {passwordStrength()}</p>
        )}
        {errors.password && <p className="error">{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <button type="submit">Register</button>
      </form>

      {success && <p className="success">{success}</p>}
    </div>
  );
}

export default RegistrationForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const RegisterPage: React.FC = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={user.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn">
            Register
          </button>
        </form>
        <p className="form-footer">
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AuthPage = () => {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async () => {

    try {

      if (isLogin) {

        const res = await fetch(
          "https://data-lakshya-back-end-1.onrender.com/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
          }
        );

        const data = await res.json();

        if (res.ok && data.token) {

          localStorage.setItem("token", data.token);

          alert("Login Successful");

          navigate("/AdminDashboard");

        } else {

          alert(data.msg || "Login Failed");

        }

      } else {

        const res = await fetch(
          "https://data-lakshya-back-end-1.onrender.com/api/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
          }
        );

        const data = await res.json();

        alert(data.msg || "Signup Successful");

        setIsLogin(true);

      }

    } catch (error) {

      console.log(error);
      alert("Server Error");

    }

  };

  return (

    <div className="admin-container">

      <h2 className="admin-title">
        {isLogin ? "Admin Login" : "Admin Signup"}
      </h2>

      <input
        className="admin-input"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        className="admin-input"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button
        type="button"
        className="admin-button"
        onClick={handleSubmit}
      >
        {isLogin ? "Login" : "Signup"}
      </button>

      <p
        style={{ cursor: "pointer", marginTop: 10 }}
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin
          ? "Create Admin Account"
          : "Already have account? Login"}
      </p>

    </div>
  );

};

export default AuthPage;
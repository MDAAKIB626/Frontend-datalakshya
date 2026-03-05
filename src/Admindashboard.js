import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {

  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
    link: ""
  });

  const navigate = useNavigate();


  // 🔐 Protect Route
  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/auth");
    }

  }, [navigate]);


  // ✅ Save Quiz
  const saveQuiz = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(quiz)
      });

      const data = await res.json();

      if (res.ok) {
        alert("Quiz Saved Successfully");
      } else {
        alert(data.msg || "Error");
      }

    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };


  const logout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };


  return (
    <div className="admin-container">

      <h2 className="admin-title">
        Admin Dashboard - Quiz
      </h2>

      <button
        className="admin-button"
        onClick={logout}
      >
        Logout
      </button>

      <input
        className="admin-input"
        placeholder="Quiz Title"
        value={quiz.title}
        onChange={(e) =>
          setQuiz({ ...quiz, title: e.target.value })
        }
      />

      <textarea
        className="admin-textarea"
        placeholder="Quiz Description"
        value={quiz.description}
        onChange={(e) =>
          setQuiz({ ...quiz, description: e.target.value })
        }
      />

      <input
        className="admin-input"
        placeholder="Google Form Link"
        value={quiz.link}
        onChange={(e) =>
          setQuiz({ ...quiz, link: e.target.value })
        }
      />

      <button
        className="admin-button"
        onClick={saveQuiz}
      >
        Save Quiz
      </button>

    </div>
  );
};

export default AdminDashboard;
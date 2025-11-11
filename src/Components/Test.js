import React from "react";

const Test = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <div className="card shadow-lg p-4 text-center" style={{ width: "400px", borderRadius: "15px" }}>
        <h2 className="mb-3 text-primary fw-bold">🎓 Take The Quiz</h2>
        <p className="text-muted mb-4">
          Click the button below to open the quiz form and submit your answers.
        </p>

        {/* Google Form Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfsvPnX_-fkZHdm5Ats9pwc5yI0jKEAguMlobmEJ_HpvZuFAQ/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary w-100 py-2 fw-bold"
          style={{ borderRadius: "10px" }}
        >
          🎯 Start Quiz
        </a>

        <hr className="my-4" />

        <p className="text-secondary" style={{ fontSize: "14px" }}>
          Your participation helps improve learning 📚✌️
        </p>
      </div>

    </div>
  );
};

export default Test;

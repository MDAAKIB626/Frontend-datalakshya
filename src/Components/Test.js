import React, { useEffect, useState } from "react";
import img1 from "./homeimages20/quizimg4.png";

const Test = () => {

  const quizLink = "https://docs.google.com/forms/d/e/1FAIpQLSfsvPnX_-fkZHdm5Ats9pwc5yI0jKEAguMlobmEJ_HpvZuFAQ/viewform?usp=publish-editor";

  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>

      {/* HERO SECTION */}
      <div
        className="container-fluid text-white py-5"
        style={{
          background: "linear-gradient(135deg, #d7d5e0, #b272ed)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <h5 className="text-warning fw-bold"> Online Skill Challenge</h5>
              <h1 className="display-4 fw-bold">Test Your Knowledge</h1>
              
              <p>AI & Machine Learning Quiz

       The AI & Machine Learning Quiz is designed based on important concepts, latest AI developments, and practical applications discussed in our daily AI updates and learning modules. This quiz helps learners strengthen their understanding of Artificial Intelligence, Machine Learning, Data Science, and emerging technologies.

    Regular practice will help you improve conceptual clarity, problem-solving ability, and stay updated with current trends in the AI industry.

      Best of luck! 
</p>

              <div className="mb-3">
                <strong>⏳ Quiz Ends In: {formatTime()}</strong>
              </div>

              <a
                href={quizLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light btn-lg fw-bold"
              >
                🎯 Start Quiz Now
              </a>
            </div>

            <div className="col-md-6 text-center">
              <img
                src={img1}
                alt="Quiz Prize"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "350px" }}
              />
            </div>

          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">✨ Quiz Features</h2>
        <div className="row text-center">

          <div className="col-md-3 mb-4">
            <h5>✅ 20 Questions</h5>
            <p>Multiple choice format</p>
          </div>

          <div className="col-md-3 mb-4">
            <h5>⏱️ Timed Quiz</h5>
            <p>Limited time challenge</p>
          </div>

          <div className="col-md-3 mb-4">
            <h5>🏆 Top Rankers</h5>
            <p>Exciting prizes for winners</p>
          </div>

          <div className="col-md-3 mb-4">
            <h5>📜 E-Certificate</h5>
            <p>For all participants</p>
          </div>

        </div>
      </div>

      {/* PRIZE SECTION */}
      <div className="container-fluid bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">🏆 Prize Breakdown</h2>

          <div className="row">

            <div className="col-md-4">
              <h4>🥇 1st Prize</h4>
              <p>₹1000 + Certificate</p>
            </div>

            <div className="col-md-4">
              <h4>🥈 2nd Prize</h4>
              <p>₹500 + Certificate</p>
            </div>

            <div className="col-md-4">
              <h4>🥉 3rd Prize</h4>
              <p>₹300 + Certificate</p>
            </div>

          </div>
        </div>
      </div>
       {/* WHY PARTICIPATE */}
<div className="container py-5">
  <h2 className="text-center fw-bold mb-4">Why Participate?</h2>

  <ul>
    <li>Boost your confidence</li>
    <li>Improve problem-solving skills</li>
    <li>Prepare for exams & interviews</li>
    <li>Win exciting rewards</li>
  </ul>
</div>


      {/* LEADERBOARD PREVIEW */}
      <div className="container-fluid bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">🏅 Leaderboard Preview</h2>
          <p>Results will be announced after quiz completion.</p>
        </div>
      </div>

  
      

    </div>
  );
};

export default Test;

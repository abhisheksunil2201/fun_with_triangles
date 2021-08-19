import { useState, useEffect } from "react";

function Score(props) {
  let score = props.score;
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    showResult();
  }, []);

  function showResult() {
    if (score >= 5) {
      setFeedback(
        "Congratulations!You have answered all the questions correctly."
      );
    } else if (score >= 3) {
      setFeedback("Well done! You can try again to get higher score.");
    } else if (score >= 1) {
      setFeedback("You can try again and improve your knowledge on triangles.");
    }
  }
  return (
    <div className="score-card">
      <h2>Score:</h2>
      <h3 className="score">{score}/6</h3>
      <h2>{feedback}</h2>
    </div>
  );
}

export default Score;

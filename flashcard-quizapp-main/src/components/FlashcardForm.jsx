import React, { useState } from "react";

const FlashcardForm = ({ addFlashcard }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !answer) return;
    addFlashcard(question, answer);
    setQuestion("");
    setAnswer("");
  };

  return (
    <form className="flashcard-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button type="submit">Add Flashcard</button>
    </form>
  );
};

export default FlashcardForm;

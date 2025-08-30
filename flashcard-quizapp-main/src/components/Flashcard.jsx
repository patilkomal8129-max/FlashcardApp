import React, { useState } from "react";

const Flashcard = ({ card, editFlashcard, deleteFlashcard }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [question, setQuestion] = useState(card.question);
  const [answer, setAnswer] = useState(card.answer);

  const handleSave = () => {
    editFlashcard(card.id, question, answer);
    setIsEditing(false);
  };

  

  return (
    <div className="flashcard">
      {isEditing ? (
        <>
          <input value={question} onChange={(e) => setQuestion(e.target.value)} />
          <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h2>{question}</h2>
          {showAnswer && <p>{answer}</p>}
          <button onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </button>
          <div className="actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteFlashcard(card.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Flashcard;

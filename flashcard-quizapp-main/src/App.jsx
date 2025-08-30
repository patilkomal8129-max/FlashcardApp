import React, { useState, useEffect } from "react";
import FlashcardList from "./components/FlashcardList";
import FlashcardForm from "./components/FlashcardForm";

const App = () => {
  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces."
    },
    {
      id: 2,
      question: "What does JSX stand for?",
      answer: "JavaScript XML – it lets you write HTML inside JavaScript."
    },
    {
      id: 3,
      question: "Which hook is used to manage state in functional components?",
      answer: "useState – it returns the state value and a function to update it."
    },
    {
      id: 4,
      question: "What is the purpose of useEffect?",
      answer: "It manages side effects such as API calls, subscriptions, or timers."
    },
    {
      id: 5,
      question: "What does useRef allow you to do?",
      answer: "It allows direct access to DOM nodes and stores mutable values without re-rendering."
    }
  ]);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("flashcards"));
    if (stored) setFlashcards(stored);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
  }, [flashcards]);

  const addFlashcard = (question, answer) => {
    setFlashcards([...flashcards, { id: Date.now(), question, answer }]);
  };

  const editFlashcard = (id, updatedQuestion, updatedAnswer) => {
    setFlashcards(
      flashcards.map((fc) =>
        fc.id === id ? { ...fc, question: updatedQuestion, answer: updatedAnswer } : fc
      )
    );
  };

  const deleteFlashcard = (id) => {
    setFlashcards(flashcards.filter((fc) => fc.id !== id));
  };

  const nextCard = () => {
    if (flashcards.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % flashcards.length);
    }
  };
  
  const prevCard = () => {
    if (flashcards.length > 0) {
      setCurrentIndex((prev) =>
        prev === 0 ? flashcards.length - 1 : prev - 1
      );
    }
  };
  

  return (
    <div className="app">
      <h1>Flashcard Quiz App</h1>
      <FlashcardForm addFlashcard={addFlashcard} />
      {flashcards.length > 0 ? (
        <FlashcardList
          flashcards={flashcards}
          currentIndex={currentIndex}
          editFlashcard={editFlashcard}
          deleteFlashcard={deleteFlashcard}
        />
      ) : (
        <p>No flashcards available. Add some!</p>
      )}
      <div className="navigation">
        <button onClick={prevCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  );
};

export default App;

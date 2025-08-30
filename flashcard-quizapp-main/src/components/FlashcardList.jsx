import React from "react";
import Flashcard from "./Flashcard";

const FlashcardList = ({ flashcards, currentIndex, editFlashcard, deleteFlashcard }) => {
//   if (flashcards.length === 0) return <p>No flashcards available.</p>;

  const currentCard = flashcards[currentIndex];

  if (flashcards.length === 0) {
    return <p>No flashcards available. Please add some!</p>;
  }
  

  return (
    <div className="flashcard-container">
      <Flashcard
        key={currentCard.id}   // 👈 Force re-render when index changes
        card={currentCard}
        editFlashcard={editFlashcard}
        deleteFlashcard={deleteFlashcard}
      />
      <p>
        Card {currentIndex + 1} of {flashcards.length}
      </p>
    </div>
  );
};

export default FlashcardList;

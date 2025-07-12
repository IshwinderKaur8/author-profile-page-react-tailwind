import React, { useState, useEffect } from 'react';

const quotes = [
  { id: 1, text: "The first draft is just you telling yourself the story.", author: "Terry Pratchett" },
  { id: 2, text: "There is no greater agony than bearing an untold story inside you.", author: "Maya Angelou" },
  { id: 3, text: "Write what you know. That would make a very short story.", author: "Fran Lebowitz" },
  { id: 4, text: "If you want to be a writer, you must do two things above all others: read a lot and write a lot.", author: "Stephen King" },
];

const QuoteWidget = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 h-fit">
      <h3 className="text-xl font-semibold text-dark-grey mb-4">Favorite Quotes</h3>
      <div className="text-center">
        <p className="text-gray-700 italic mb-3 text-lg">"{currentQuote.text}"</p>
        <p className="text-gray-500 font-medium">- {currentQuote.author}</p>
      </div>
    </div>
  );
};

export default QuoteWidget;
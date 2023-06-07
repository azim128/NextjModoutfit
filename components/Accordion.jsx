'use client'
import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        className="flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && <div className="p-4">{content}</div>}
    </div>
  );
};
const Accordion = () => {
  return (
    <div className="container mx-auto px-4 py-6">
    <h2 className="text-2xl font-bold text-gray-800">FAQ</h2>
    <div className="mt-4">
      <AccordionItem
        title="Question 1"
        content="Answer to question 1 goes here."
      />
      <AccordionItem
        title="Question 2"
        content="Answer to question 2 goes here."
      />
      <AccordionItem
        title="Question 3"
        content="Answer to question 3 goes here."
      />
      {/* Add more AccordionItem components for other FAQ questions */}
    </div>
  </div>
  );
};

export default Accordion;

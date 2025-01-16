import React from "react";

function FAQ({ curData, onToggle, isActive }) {
  const { question, answer } = curData;

  return (
    <li>
      <div className="accordion-grid">
        <p>{question}</p>
        <button  onClick={onToggle} className={isActive ? "active-btn" : ""}>
          {isActive ? "close" : "show"}
        </button>
      </div>
      <p>{isActive && answer}</p>
    </li>
  );
}

export default FAQ;

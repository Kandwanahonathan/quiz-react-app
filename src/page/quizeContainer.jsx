import React, { useState } from "react";

function Question() {
  const questions = [
    {
      question: "What is the main purpose of road signs?",
      options: ["To decorate roads", "To give instructions to drivers", "To slow traffic"],
      answer: "To give instructions to drivers"
    },
    {
      question: "When approaching a zebra crossing, you should:",
      options: ["Speed up", "Stop and allow pedestrians to cross", "Ignore pedestrians"],
      answer: "Stop and allow pedestrians to cross"
    }
  ];

  const [selected, setSelected] = useState("");
  const [status, setStatus] = useState("");

  const handleClick = (opt, answer) => {
    setSelected(opt);
    if (opt === answer) {
      setStatus("correct");
    } else {
      setStatus("wrong");
    }
  };

  return (
    <div className="container-fluid">
      {questions.map((q, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{q.question}</h3>
          <div className="btn-group">
            {q.options.map((opt, i) => {
              let bg = "";
              if (selected === opt) {
                bg = status === "correct" ? "lightgreen" : "salmon";
              }
              return (
                <button
                  key={i}
                  onClick={() => handleClick(opt, q.answer)}
                  className="btn btn-light"
                  style={{ margin: "5px", backgroundColor: bg }}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Question;

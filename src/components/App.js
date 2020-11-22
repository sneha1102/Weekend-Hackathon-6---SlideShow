import React, { Component, useState } from "react";
import "../styles/App.css";

const App = ({ slides }) => {
  const [index, setIndex] = React.useState(0);
  const restart = () => {
    setIndex(0);
  };
  const nextClick = () => {
    if (index === slides.length - 1) {
      return;
    }
    setIndex(index + 1);
  };
  const prevClick = () => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  };
  return (
    <>
      <h1 data-testid="title">{slides[index].title}</h1>
      <p data-testid="text">{slides[index].text}</p>
      <button
        onClick={restart}
        data-testid="button-restart"
        disabled={index === 0 ? true : false}
      >
        Restart
      </button>
      <button
        onClick={nextClick}
        data-testid="button-next"
        disabled={index === slides.length - 1 ? true : false}
      >
        Next
      </button>
      <button
        onClick={prevClick}
        data-testid="button-prev"
        disabled={index === 0 ? true : false}
      >
        Prev
      </button>
    </>
  );
};

export default App;

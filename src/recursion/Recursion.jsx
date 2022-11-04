import React from "react";
import RecursiveComponent from "./RecursiveComponent";
import useTimer from "../hooks/useTimer";

// write components here
const One = () => <div className="App-box">One</div>;
const Two = () => <div className="App-box">Two</div>;
const Three = () => <div className="App-box">Three</div>;

const components = [One, Two, Three];

function Recursion() {
  const seconds = useTimer();

  return (
    <div className="App-wrapper">
      <div className="App-timer">{seconds} seconds</div>
      <RecursiveComponent components={components} currentIndex={0} />
    </div>
  );
}

Recursion.propTypes = {
  // ...
};

export default Recursion;

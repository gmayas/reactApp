import React, { useState, useEffect, useContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeContext from "./contexts/ThemeContext";

//
const App = () => {
  //
  const { darkMode } = useContext(ThemeContext);
  let mode = "dark";
  if (darkMode) { mode = "dark" } else { mode = "light" };
  document.querySelector("body").setAttribute("data-bs-theme-me", mode)
  //
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  useEffect(() => {
    console.log('Component rendered ....')
  }, [firstCount]);

  return (
    <>
      <Header title="React App Practice" />
      <div className="container">
        <p> ---------------------- </p>

        <p>First Count: {firstCount}</p>
        <p>Second Count: {secondCount}</p>
        <button type="button" className="btn btn-primary"
          onClick={() => setFirstCount(firstCount + 1)}>Increment first</button>
        <button type="button" className="btn btn-primary"
          onClick={() => setSecondCount(secondCount + 1)}>Increment second</button>
      </div>
      <Footer />
    </>
  )
}

export default App

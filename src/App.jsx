import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  useEffect(() => {
    console.log('Component rendered ....')
  },[firstCount]);

  return (
    <>
      <Header title="ReactApp" />
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

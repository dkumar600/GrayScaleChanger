import "./styles.css";
import { useRef, useState } from "react";
import pic from "./pic.jpg";
export default function App() {
  const buttonRef = useRef();
  const counter = useRef(0);
  const [ginti, ginneWala] = useState(0);
  function clickable() {
    if (ginti <= 50) {
      buttonRef.current.style.filter = `grayscale(${100}%)`;
      ginneWala(100);
    } else if (ginti > 50) {
      buttonRef.current.style.filter = `grayscale(${0}%)`;
      ginneWala(0);
    }
  }
  function sliderHandle() {
    buttonRef.current.style.filter = `grayscale(${counter.current.value}%)`;
    ginneWala(counter.current.value);
  }
  return (
    <div className="App">
      <h1>GrayScale</h1>
      <img src={pic} ref={buttonRef} alt="New Img" onClick={clickable} />
      <div>
        <input
          type="range"
          min="1"
          max="100"
          value={ginti}
          ref={counter}
          onChange={sliderHandle}
        />
      </div>
      <div>{ginti}</div>
    </div>
  );
}

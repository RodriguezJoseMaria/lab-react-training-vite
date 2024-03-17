import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  function rgbValue(min, max, value) {
    return value < min ? min : value > max ? max : value;
  }

  return (
    <div>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(value) => {
          if (value >= 0 && value <= 255) {
            setRValue(value);
          } else {
            alert("Choose a number between 0 and 255");
          }
        }}
      />

      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(value) => {
          if (value >= 0 && value <= 255) {
            setGValue(value);
          } else {
            alert("Choose a number between 0 and 255");
          }
        }}
      />

      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(value) => {
          if (value >= 0 && value <= 255) {
            setBValue(value);
          } else {
            alert("Choose a number between 0 and 255");
          }
        }}
      />
      <div className="single-color">
        <div
          className="color"
          style={{ backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})` }}
        ></div>
        <h2>{`rgb(rgb(${rValue}, ${gValue}, ${bValue})`}:</h2>
      </div>
    </div>
  );
}

export default RGBColorPicker;

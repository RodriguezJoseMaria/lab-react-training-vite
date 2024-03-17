import { useState } from "react";
function SingleColorPicker(props) {
  // const [inputValue, setInputValue] = useState(0)
  const { color, value, onChange } = props;

  //   function bgStyle(color) {
  //     switch (color) {
  //       case "r":
  //         {backgroundColor: `rgb(${value}, 0, 0)`};
  //         break;
  //       case "g":
  //         {backgroundColor: `rgb(0, ${value}, 0)`};
  //         break;
  //       case "b":
  //         {backgroundColor: `rgb(0, 0, ${value})`};
  //         break;
  //       default:
  //         break;
  //     }
  //   }

  function bgStyle(color) {
    switch (color) {
      case "r":
        return { backgroundColor: `rgb(${value}, 0, 0)` };
      case "g":
        return { backgroundColor: `rgb(0, ${value}, 0)` };
      case "b":
        return { backgroundColor: `rgb(0, 0, ${value})` };
    }
  }

  return (
    <div className="single-color">
      <div className="color" style={bgStyle(color)}></div>
      <h2>{color.toUpperCase()}:</h2>
      <div>
        <input
          type="number"
          onChange={(e) => {
            onChange(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default SingleColorPicker;

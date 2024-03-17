import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);
  const bgColorArray = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [bgColor, setBgColor] = useState(bgColorArray[0]);

  return (
    <>
      <button
        style={{ backgroundColor: bgColor }}
        onClick={() => {
          setCount(count + 1);
          setBgColor(bgColorArray[count % bgColorArray.length]);
        }}
      >
        {count}Likes
      </button>
    </>
  );
}

export default LikeButton;

import { useState } from "react";

function ClickablePicture(props) {
  const [img, setImg] = useState(props.img);
  const imgToggle = () => {
    img === props.img ? setImg(props.imgClicked) : setImg(props.img);
  };

  return (
    <>
      <img
        onClick={() => {
          imgToggle();
        }}
        src={img}
        style={{ width: "25%" }}
      />
    </>
  );
}

export default ClickablePicture;

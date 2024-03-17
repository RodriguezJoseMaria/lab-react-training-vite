function BoxColor(props) {
  function rgbValue(min, max, value) {
    return value < min ? min : value > max ? max : value;
  }

  const divStyle = {
    backgroundColor: `rgb(${rgbValue(0, 255, props.r)}, ${rgbValue(
      0,
      255,
      props.g
    )}, ${rgbValue(0, 255, props.b)})`,
  };

  return (
    <div style={divStyle} className="box-color">
      <p className="p-box-color">
        rgb({rgbValue(0, 255, props.r)}, {rgbValue(0, 255, props.g)},
        {rgbValue(0, 255, props.b)})
      </p>
    </div>
  );
}

export default BoxColor;

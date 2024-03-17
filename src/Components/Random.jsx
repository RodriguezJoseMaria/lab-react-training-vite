function Random(props) {
  function random(min, max) {
    min = Math.ceil(props.min);
    max = Math.floor(props.max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="id-card">
      <p className="p-greetings">
        Random value between {props.min} and {props.max} => {random()}
      </p>
    </div>
  );
}

export default Random;

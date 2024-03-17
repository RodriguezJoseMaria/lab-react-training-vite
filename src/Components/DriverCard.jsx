function DriverCard(props) {
  const car = {
    model: props.car.model,
    licensePlate: props.car.licensePlate,
  };
  function result() {
    if (props.rating >= 0) {
      if (props.rating <= 5) {
        return Math.round(props.rating);
      } else {
        return "Choose a number between 0 and 5";
      }
    } else {
      return "Choose a number between 0 and 5";
    }
  }
  function blueStars() {
    switch (result()) {
      case 0:
        return "☆☆☆☆☆";
      case 1:
        return "★☆☆☆☆";
      case 2:
        return "★★☆☆☆";
      case 3:
        return "★★★☆☆";
      case 4:
        return "★★★★☆";
      case 5:
        return "★★★★★";
    }
  }

  return (
    <div className="driver-car">
      <div>
        <img
          style={{ width: 100, height: 100, borderRadius: "50%" }}
          src={props.img}
          alt="Profile Image"
        />
      </div>
      <div className="driverCard-text">
        <h2>{props.name}</h2>
        <p className="blue-stars">{blueStars()}</p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;

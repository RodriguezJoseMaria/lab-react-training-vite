function IdCard(props) {
  return (
    <div className="id-card">
      <div className="id-img">
        <img src={props.picture} alt="profile" />
      </div>
      <div className="id-text">
        <p>
          <b>First Name:</b>
          {props.firstName}
        </p>
        <p>
          <b>Last Name:</b>
          {props.lastName}
        </p>
        <p>
          <b>Gender:</b>
          {props.gender}
        </p>
        <p>
          <b>Height:</b>
          {props.height}
        </p>
        <p>
          <b>Birth:</b>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;

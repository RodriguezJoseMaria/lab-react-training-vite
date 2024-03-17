import logoVisa from "../assets/images/visa.png";
import logoMc from "../assets/images/master-card.svg";

function CreditCard(props) {
  const cardStyle = {
    color: props.color,
    backgroundColor: props.bgColor,
    width: "20%",
    borderRadius: "10px",
  };

  function typeLogo() {
    switch (props.type) {
      case "Visa":
        return logoVisa;
      case "Master Card":
        return logoMc;
      default:
        "Choose Visa or MasterCard";
    }
  }

  function enmascaradeCardNumber() {
    const cardNumber = props.number;
    if (cardNumber.length >= 4) {
      const lastFour = cardNumber.slice(-4);
      const enmascaradeCard =
        "•".repeat(cardNumber.length / 4) +
        " " +
        "•".repeat(cardNumber.length / 4) +
        " " +
        "•".repeat(cardNumber.length / 4) +
        " " +
        lastFour;
      return enmascaradeCard;
    } else {
      return "Invalid Creditcard Number";
    }
  }

  return (
    <div style={cardStyle}>
      <div className="ceditCard-logo">
        <img
          src={typeLogo()}
          alt="Choose Visa or MasterCard"
          className="ceditCard-img"
        />
      </div>
      <div className="creditCard-number">{enmascaradeCardNumber()}</div>
      <div className="creditCard-text">
        <p>
          Expires {props.expirationMonth}/{props.expirationYear}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.bank}
        </p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;

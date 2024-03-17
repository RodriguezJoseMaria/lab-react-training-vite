import React, { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [hola, setHola] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  return (
    <div>
      <div>
        <p>
          <b>Email</b>
        </p>
        <input
          style={{ width: "50%", border: "2px solid black", borderRadius: 6 }}
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <p>
          <b>Password</b>
        </p>
        <input
          style={{ width: "50%", border: "2px solid black", borderRadius: 6 }}
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <p>
          <b>Nationality</b>
        </p>
        <select
          style={{ width: "50%", border: "2px solid black", borderRadius: 6 }}
          name="nationality"
          value={nationality}
          onChange={(e) => {
            setNationality(e.target.value);
          }}
        >
          <option value="">Select nationality</option>
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="fr">François</option>
        </select>
      </div>
      <br />
      <div>
        <button
          onClick={() => {
            switch (nationality) {
              case "es":
                setHola("Hola");
                setEmailMessage(`Tu correo electrónico es: ${email}.`);
                password
                  ? setPasswordMessage("Tu correo electrónico es correcto.")
                  : setPasswordMessage("Tu correo electrónico no es correcto.");
                break;
              case "en":
                // Handle English case
                break;
              case "fr":
                // Handle French case
                break;
              default:
                // Handle other cases
                break;
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SignupPage;

import profiles from "../data//berlin.json";
import { useState } from "react";

function FaceBook() {
  const [country, setCountry] = useState("null");

  const buttonsArray = [...new Set(profiles.map((profile) => profile.country))];

  const changeBackground = (profile) => {
    return country === profile.country || country === "All"
      ? "LightSkyBlue"
      : "white";
  };

  return (
    <>
      <div>
        <button
          style={{
            color: "black",
            margin: 8,
            backgroundColor: country === "All" ? "LightSkyBlue" : "white",
          }}
          onClick={() => setCountry("All")}
        >
          All
        </button>
        <button
          style={{
            color: "black",
            margin: 8,
            backgroundColor: country === "All" ? "LightSkyBlue" : "white",
          }}
          onClick={() => setCountry("null")}
        >
          None
        </button>
        {buttonsArray.map((countryName, index) => {
          return (
            <button
              key={index + countryName}
              onClick={() => {
                setCountry(countryName);
              }}
              style={{
                color: "black",
                margin: 8,
                backgroundColor:
                  countryName === country ? "LightSkyBlue" : "white",
              }}
            >
              {countryName}{" "}
            </button>
          );
        })}
      </div>
      <br />

      {profiles.map((profile) => {
        return (
          <div key={profile.img} alt={profile.lastName + "picture"}>
            <div
              className="id-card"
              style={{ backgroundColor: changeBackground(profile) }}
            >
              <div className="id-img">
                <img src={profile.img} alt="profile" className="fb-img" />
              </div>
              <div className="id-text">
                <p>
                  <b>First Name:</b>
                  {profile.firstName}
                </p>
                <p>
                  <b>Last Name:</b>
                  {profile.lastName}
                </p>
                <p>
                  <b>Country:</b>
                  {profile.country}
                </p>
                <p>
                  <b>Type:</b>
                  {profile.isStudent ? "Student" : "Teacher"}
                </p>
              </div>
            </div>
            <br />
          </div>
        );
      })}
    </>
  );
}

export default FaceBook;

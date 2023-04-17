import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    return (
      <div>
      <img className="raw_logo"
        alt="saad sitting on table"
        src={require("../../assests/images/TechZPet1.png")}
      ></img>
    </div>
    );
  }
}

export default LogoLoader;

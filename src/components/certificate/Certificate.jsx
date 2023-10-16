import React from "react";
import "./Certificate.css";

function Certificate() {
  return (
    <>
      <div className="certificate-div">
        <div className="certificate-header">
          <div className="logo-company-name">
            
            <img className="logo" 
            src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" 
            alt="logo" />
            <div className="company-name">Node Js</div>
          </div>
          <div className="couese-name">
            <span>CERTIFICARE</span> OF COMPLETION
          </div>
        </div>

        <div className="certificate-holder-name">
          <div className="name">GAIRIK SHARMA</div>
        </div>

        <div className="certificate-mid">
          <div className="note">
            Has successfully completed <span>Node Js</span> training
          </div>
        </div>
      </div>
      <button className="generate-button">Generate</button>
    </>
  );
}

export default Certificate;

import React from "react";
import "./Certificate.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import nodejs from "./nodejs.png"

function Certificate() {
  const convertToPDF = () => {
    const input = document.getElementById("c");

    
    const width = input.offsetWidth;
    const height = input.offsetHeight;

    html2canvas(input, { width, height })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("l", "mm", [width, height]); // "mm" is for millimeters
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("certificate.pdf");
      })
      .catch((error) => {
        console.error("Error converting div to PDF:", error);
      });
  };
  return (
    <>
      <div className="certificate-wrapper" id="c">
        <div className="certificate-div">
          <div className="certificate-header">
            <div className="logo-company-name">
              <img
                className="logo"
                src={nodejs}
                alt="logo"
              />
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              veniam? Has successfully completed <span>Node Js</span> training
            </div>
          </div>

          <div className="certificate-low">
            <div className="certificate-low-left">
              <div className="date">17/10/2023</div>
              <div className="date-label">Date</div>
            </div>

            <div className="certificate-low-right">
              <div className="signature">
                <img
                  src="data:image/png;base64,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"
                  alt="signature"
                />
              </div>
              <div className="certificate-issuing-name">Gairik Sharma</div>
              <div className="signature-label">Instructor</div>
            </div>
          </div>
        </div>
      </div>
      <button className="generate-button" onClick={convertToPDF}>
        Generate
      </button>
    </>
  );
}

export default Certificate;

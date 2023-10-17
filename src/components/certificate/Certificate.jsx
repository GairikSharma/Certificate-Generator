import React, { useContext } from "react";
import "./Certificate.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import nodejs from "./nodejs.png";
import { CertificateContext } from "../../Context";
import { IoMdCloudDownload } from "react-icons/io";

function Certificate() {
  const {
    companyname,
    name,
    coursename,
    date,
    instructorname,
    selectedImage,
    selectedSignature,
  } = useContext(CertificateContext);

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
      <button className="generate-button" onClick={convertToPDF}>
        <IoMdCloudDownload />
        Download
      </button>
      <div className="certificate-wrapper" id="c">
        <div className="certificate-div">
          <div className="certificate-header">
            <div className="logo-company-name">
              {selectedImage && <img src={selectedImage} />}
              <div className="company-name">{companyname}</div>
            </div>
            <div className="couese-name">
              <span>CERTIFICARE</span> OF COMPLETION
            </div>
          </div>

          <div className="certificate-holder-name">
            <div className="name">{name}</div>
          </div>

          <div className="certificate-mid">
            <div className="note">
              Has successfully completed <span>{coursename}</span> Training
            </div>
          </div>

          <div className="certificate-low">
            <div className="certificate-low-left">
              <div className="date">{date}</div>
              <div className="date-label">Date</div>
            </div>

            <div className="certificate-low-right">
              <div className="signature">
                {selectedSignature && (
                  <img src={selectedSignature} alt="signature" />
                )}
              </div>
              <div className="certificate-issuing-name">{instructorname}</div>
              <div className="signature-label">Instructor</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificate;

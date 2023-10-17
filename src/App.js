import { useState } from "react";
import "./App.css";
import Certificate from "./components/certificate/Certificate";
import { CertificateContext } from "./Context";
import { ChakraProvider } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";

function App() {
  const [companyname, setCompanyName] = useState("Enter company name");
  const [name, setName] = useState("Enter candidate name");
  const [coursename, setCourseName] = useState("Enter course name");
  const [date, setDate] = useState("Enter date");
  const [instructorname, setInstructorName] = useState("Enter instructor name");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSignature, setSelectedSignature] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const uploadSignature = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedSignature(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <ChakraProvider>
      <CertificateContext.Provider
        value={{
          companyname,
          name,
          coursename,
          date,
          instructorname,
          selectedImage,
          selectedSignature,
        }}
      >
        <div className="App">
          <div className="left">
            <Input
              type="text"
              placeholder="Enter Company name"
              name="companyname"
              id="companyname"
              onChange={(e) => setCompanyName(e.target.value)}
            />

            <input
              type="file"
              id="logo"
              class="inputfile"
              accept="image/*"
              onChange={handleImageChange}
            />
            <div className="upload-section">
              <div>Upload Logo</div>
              <AiOutlineCloudUpload />
              <label for="logo">
                Choose File
              </label>
            </div>

            <Input
              type="text"
              placeholder="Enter Candidate name"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Enter Course name"
              name="coursename"
              id="coursename"
              onChange={(e) => setCourseName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Enter Date"
              name="date"
              id="date"
              onChange={(e) => setDate(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Enter Instructor name"
              name="instructor"
              id="instructor"
              onChange={(e) => setInstructorName(e.target.value)}
            />
            <div className="upload-section">
              <div>Upload signature</div>
              <AiOutlineCloudUpload />
              <input
                type="file"
                id="signature"
                className="inputfile"
                accept="image/*"
                onChange={uploadSignature}
              />
              <label for="signature">Choose File</label>
            </div>
          </div>
          <div className="right">
            <Certificate id="c" />
          </div>
        </div>
      </CertificateContext.Provider>
    </ChakraProvider>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Certificate from "./components/certificate/Certificate";
import { CertificateContext } from "./Context";

function App() {
  const [companyname, setCompanyName] = useState('Enter company name')
  const [name, setName] = useState('Enter candidate name')
  const [coursename, setCourseName] = useState('Enter course name')
  const [date, setDate] = useState('Enter date')
  const [instructorname, setInstructorName] = useState('Enter instructor name')
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
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedSignature(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }
  return (
    <CertificateContext.Provider value={{companyname, name, coursename, date, instructorname, selectedImage, selectedSignature}}>
      <div className="App">
        <div className="left">
          <input type="text" name="companyname" id="companyname" onChange={(e)=>setCompanyName(e.target.value)} />
          <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} />
          <input type="text" name="coursename" id="coursename" onChange={(e)=>setCourseName(e.target.value)} />
          <input type="text" name="date" id="date" onChange={(e)=>setDate(e.target.value)} />
          <input type="text" name="instructor" id="instructor" onChange={(e)=>setInstructorName(e.target.value)} />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <input type="file" accept="image/*" onChange={uploadSignature} />
        </div>
        <div className="right">
          <Certificate id="c" />
        </div>
      </div>
    </CertificateContext.Provider>
  );
}

export default App;

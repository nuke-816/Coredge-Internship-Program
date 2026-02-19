import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Address from "./components/Address";
import Review from "./components/Review";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    country: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  function nextStep() {
    setCurrentStep(prev => prev + 1);
  }

  function prevStep() {
    setCurrentStep(prev => prev - 1);
  }

  function renderStep() {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfo
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <Address
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <Review
            formData={formData}
            prevStep={prevStep}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="app">
      <div className="form-container">
        <h2>Multi Step Form</h2>
        {renderStep()}
      </div>
    </div>
  );
}

export default App;

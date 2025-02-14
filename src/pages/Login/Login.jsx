import { useState } from "react";
import "./Login.scss"; // Import the SCSS file

const Login = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected option: ${selectedOption}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="radio-container">
        <label className="radio-label">
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
            className="radio-input"
          />
          Option 1
        </label>
      </div>
      <div className="radio-container">
        <label className="radio-label">
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
            className="radio-input"
          />
          Option 2
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;

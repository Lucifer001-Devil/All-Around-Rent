import React, { useState } from 'react';

const ClientRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    dob: '',
    gender: '',
    address: '',
    securityQuestion: '',
    referralSource: '',
    termsAccepted: false
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : files ? files[0] : value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    setError('');
  
    try {
      const response = await fetch('http://localhost:5000/api/client/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Client registered successfully');
        onClick()
        // Redirect or clear form
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };
  

  const onClick = () => {
    window.location.href = '/login';
  }

  return (
    <div className="form-container">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide text-black">
        Client Registration
      </h2>
      <div className="box-container">
        <form onSubmit={handleSubmit} className="registration-form">
          <div>
            <label>Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>

          <div>
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div>
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div>
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </div>

          {/* Display error message if passwords do not match */}
          {error && <div className="error-message">{error}</div>}

          <div>
            <label>Phone Number</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </div>

          <div>
            <label>Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
          </div>

          <div>
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label>Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
          </div>

          <div>
            <label>Profile Picture</label>
            <input type="file" name="profilePicture" onChange={handleChange} />
          </div>

          <div>
            <label>Security Question</label>
            <select name="securityQuestion" value={formData.securityQuestion} onChange={handleChange}>
              <option value="">Select a question</option>
              <option value="mothersMaidenName">What is your mother's maiden name?</option>
              {/* Add more questions as needed */}
            </select>
          </div>

          <div>
            <label>Referral Source</label>
            <select name="referralSource" value={formData.referralSource} onChange={handleChange}>
              <option value="">Select</option>
              <option value="socialMedia">Social Media</option>
              <option value="friend">Friend</option>
              <option value="advertisement">Advertisement</option>
            </select>
          </div>

          <div>
            <label>
              <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
              I agree to the Terms and Conditions
            </label>
          </div>

          <button onClick={handleSubmit} type="submit">Register</button>
        </form>
      </div>

      <style jsx>{`
        .form-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin-top: 20px;
        }

        .box-container {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 800px; /* Expanded width */
          margin-top: 20px;
        }

        .registration-form div {
          margin-bottom: 20px;
        }

        .registration-form label {
          display: block;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 5px;
          color: #333; /* Set label text color */
        }

        .registration-form input,
        .registration-form select,
        .registration-form textarea {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
          color: white; /* Text color inside the input */
          background-color: #333; /* Dark background to ensure white text visibility */
          transition: all 0.3s ease; /* Smooth transition for hover effect */
        }

        /* Hover effect styles */
        .registration-form input:hover,
        .registration-form select:hover,
        .registration-form textarea:hover {
          border-color: #3498db; /* Blue border on hover */
          background-color: #444; /* Slightly lighter background on hover */
        }

        /* Focus effect styles */
        .registration-form input:focus,
        .registration-form select:focus,
        .registration-form textarea:focus {
          border-color: #2980b9; /* Darker blue border on focus */
          background-color: #555; /* Lighter background on focus */
          outline: none; /* Remove default focus outline */
        }

        .registration-form button {
          background-color: #3498db;
          color: white;
          font-size: 18px;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          width: 100%;
          transition: all 0.3s ease; /* Smooth transition for hover */
        }

        /* Hover effect with shadow for the button */
        .registration-form button:hover {
          background-color: #2980b9;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Adding shadow effect */
        }

        .registration-form textarea {
          height: 100px;
        }

        .registration-form input[type="file"] {
          padding: 5px;
        }

        .form-container h2 {
          margin-bottom: 20px;
          color: #333; /* Set heading color */
        }

        .error-message {
          color: red;
          margin-top: 10px;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default ClientRegistration;

import React, { useState } from 'react';

const FreelancerRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    dob: '',
    gender: '',
    address: '',
    profilePicture: null,
    jobTitle: '',
    hourlyRate: '',
    portfolioLink: '',
    description: '',
    termsAccepted: false,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Clear errors and proceed with form submission logic
    setError('');
    console.log('Form data submitted:', formData);
  };

  const onClick = () => {
    window.location.href = '/login';
  }

  return (
    <div className="form-container">
     <h2 style={{ color: 'white', fontFamily: 'Times New Roman, serif' }} className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
  Freelancer Registration
</h2>
      <div className="box-container">
        <form onSubmit={handleSubmit} className="registration-form">
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <div>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <label>Profile Picture</label>
            <input
              type="file"
              name="profilePicture"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Job Title/Profession</label>
            <input
              list="jobTitles"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Select or write a profession"
              required
            />
            <datalist id="jobTitles">
              <option value="Photographer" />
              <option value="Videographer" />
              <option value="Graphic Designer" />
              <option value="Web Developer" />
              <option value="Data Analyst" />
              <option value="Software Engineer" />
              <option value="Event Planner" />
              <option value="Chef" />
              <option value="Driver" />
              <option value="Tutor" />
              <option value="Electrician" />
              <option value="Plumber" />
              <option value="Carpenter" />
              <option value="Digital Marketer" />
              <option value="Freelance Writer" />
              <option value="Translator" />
              <option value="Accountant" />
              <option value="Makeup Artist" />
              {/* Add more roles as needed */}
            </datalist>
          </div>

          <div>
            <label>Hourly Rate ($)</label>
            <input
              type="number"
              name="hourlyRate"
              value={formData.hourlyRate}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Portfolio Link</label>
            <input
              type="url"
              name="portfolioLink"
              value={formData.portfolioLink}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Brief Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              I agree to the Terms and Conditions
            </label>
          </div>

          <button onClick={onClick} type="submit">Register</button>
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
          max-width: 700px;
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
          color: #333;
        }

        .registration-form input,
        .registration-form select,
        .registration-form textarea {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
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
        }

        .registration-form button:hover {
          background-color: #2980b9;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .error-message {
          color: red;
          font-size: 14px;
          margin-top: -10px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default FreelancerRegistration;

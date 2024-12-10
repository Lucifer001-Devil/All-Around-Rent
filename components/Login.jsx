import React, { useState } from "react";

const LoginPage = () => {
  const [userType, setUserType] = useState("client"); // "client" or "freelancer"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Add the handleLogin function here
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userType, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login data saved:', data);
        window.location.href = '/listings'; // Redirect after successful login
      } else {
        alert(data.message || 'Failed to save login data');
      }
    } catch (error) {
      console.error('Error saving login data:', error);
      alert('Error connecting to the server');
    }
  };

  return (
    <div className="app-container">
      <h1 className="heading">All Around Rent</h1>

      {/* Toggle between Client and Freelancer */}
      <div className="user-type-toggle">
        <button
          className={`toggle-btn ${userType === "client" ? "active" : ""}`}
          onClick={() => setUserType("client")}
        >
          Client Login
        </button>
        <button
          className={`toggle-btn ${userType === "freelancer" ? "active" : ""}`}
          onClick={() => setUserType("freelancer")}
        >
          Freelancer Login
        </button>
      </div>

      {/* Login Form */}
      <div className="form-container">
        <h2 className="form-heading">
          {userType === "client" ? "Client Login" : "Freelancer Login"}
        </h2>
        <form onSubmit={handleLogin} className="login-form">
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>

      {/* Styling */}
      <style jsx>{`
        body {
          font-family: "Times New Roman", serif;
          margin: 0;
          padding: 0;
          background-color: #222;
          color: #fff;
        }

        .app-container {
          text-align: center;
          padding: 20px;
        }

        .heading {
          font-size: 36px;
          margin-bottom: 20px;
        }

        .user-type-toggle {
          margin: 20px 0;
        }

        .toggle-btn {
          padding: 15px 30px; /* Increased padding */
          margin: 0 15px;
          border: 1px solid #fff;
          border-radius: 8px;
          background-color: transparent;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s, transform 0.3s;
        }

        .toggle-btn.active {
          background-color: rgb(249 115 22 / var(--tw-bg-opacity, 1));
          color: #fff;
        }

        .toggle-btn:hover {
          background-color: rgb(249 115 22 / var(--tw-bg-opacity, 1));
          color: #fff;
          transform: scale(1.1); /* Slightly enlarges the button */
          box-shadow: 0 4px 10px rgba(41, 128, 185, 0.6); /* Adds shadow on hover */
        }

        .form-container {
          background-color: #333;
          border: 1px solid #444;
          border-radius: 12px;
          padding: 40px; /* Increased padding */
          max-width: 500px; /* Increased width */
          margin: 50px auto;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
        }

        .form-container:hover {
          transform: scale(1.05);
        }

        .form-heading {
          margin-bottom: 30px;
          font-size: 28px;
        }

        .login-form label {
          display: block;
          margin-bottom: 8px;
          font-weight: bold;
        }

        .login-form input {
          width: 100%;
          padding: 12px; /* Increased padding for inputs */
          margin-bottom: 20px; /* Increased spacing between fields */
          border: 1px solid #555;
          border-radius: 8px;
          background-color: #444;
          color: #fff;
        }

        .login-form button {
          background-color: rgb(249 115 22 / var(--tw-bg-opacity, 1));
          color: #fff;
          border: none;
          padding: 15px; /* Increased button size */
          border-radius: 8px;
          cursor: pointer;
          width: 100%;
          font-size: 18px; /* Larger font size */
        }

        .login-form button:hover {
          background-color: rgb(249 115 22 / var(--tw-bg-opacity, 1));
        }
      `}</style>
    </div>
  );
};

export default LoginPage;

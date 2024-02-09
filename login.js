import React, { useState } from 'react';
import './login.css';
import { Navigate, useNavigate } from 'react-router-dom';
function LoginForm() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  
  const navigate=useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    alert("Username: " + username + "\nPassword: " + password);
  };


  const handleSignupSubmit = (event) => {
    event.preventDefault();
    alert("New Username: " + newUsername + "\nNew Password: " + newPassword);
  };


  const showSignup = () => {
    navigate('/register')
    setShowLogin(false);
  };


  const showLoginSection = () => {
    setShowLogin(true);
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      {showLogin ? (
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="submit" value="Login" />
        </form>
      ) : (
        <form onSubmit={handleSignupSubmit}>
          <label htmlFor="newUsername">New Username:</label>
          <input type="text" id="newUsername" name="newUsername" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} required />
          <label htmlFor="newPassword">New Password:</label>
          <input type="password" id="newPassword" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          <input type="submit" value="Signup" />
        </form>
      )}
      <div className="forgot-password">
        <a href="#">Forgot Password?</a>
      </div>
      <div className="signup">
        {showLogin ? (
          <a href="#" onClick={showSignup} className="hero-btn">Signup</a>
        ) : (
          <a href="#" onClick={showLoginSection} className="hero-btn">Back to Login</a>
        )}
      </div>
    </div>
  );
}

export default LoginForm;

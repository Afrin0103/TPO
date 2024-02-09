import React, { useState } from 'react';
import './hradd.css';

function HrAdd() { // Changed component name to start with an uppercase letter
  // State variables for HR data
  const [hrData, setHrData] = useState([]);
  const [hrName, setHrName] = useState('');
  const [hrEmail, setHrEmail] = useState('');
  const [hrContact, setHrContact] = useState('');
  const [companyName, setCompanyName] = useState('');

  // Function to add HR
  const addHR = () => {
    const newHR = {
      name: hrName,
      email: hrEmail,
      contact: hrContact,
      company: companyName
    };
    setHrData([...hrData, newHR]);

    // Clear input fields after adding
    setHrName('');
    setHrEmail('');
    setHrContact('');
    setCompanyName('');
  };

  // Function to delete HR
  const deleteHR = (index) => {
    const updatedHrData = [...hrData];
    updatedHrData.splice(index, 1);
    setHrData(updatedHrData);
  };

  // Function to edit HR
  const editHR = (index) => {
    const hr = hrData[index];
    setHrName(hr.name);
    setHrEmail(hr.email);
    setHrContact(hr.contact);
    setCompanyName(hr.company);
  };

  return (
    <div className="App">
      <div className="container">
        <h2>HR Details</h2>
        <div className="form-group">
          <label htmlFor="hrName">HR Name:</label>
          <input type="text" id="hrName" name="hrName" value={hrName} onChange={(e) => setHrName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="hrEmail">HR Email:</label>
          <input type="email" id="hrEmail" name="hrEmail" value={hrEmail} onChange={(e) => setHrEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="hrContact">HR Contact:</label>
          <input type="text" id="hrContact" name="hrContact" value={hrContact} onChange={(e) => setHrContact(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" name="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
        </div>
        <input type="submit" value="Add HR" onClick={addHR} />
      </div>

      <div className="container">
        <h2>HR List</h2>
        <ul id="hrList">
          {hrData.map((hr, index) => (
            <li key={index}>
              {hr.company}
              <div className="buttonContainer">
                <button className="editButton" onClick={() => editHR(index)}>Edit</button>
                <button className="deleteButton" onClick={() => deleteHR(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HrAdd; // Export the component with the corrected name

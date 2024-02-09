import React, { useState } from 'react';
import './companyadd.css'; // Import CSS file

function CompanyManagement() {
  // State variables for form inputs
  const [companyName, setCompanyName] = useState('');
  const [ctc, setCtc] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [file, setFile] = useState(null);
  const [companyList, setCompanyList] = useState([]);

  // Function to add a new company
  const addCompany = () => {
    if (companyName && jobDescription) {
      const newCompany = {
        companyName,
        ctc,
        jobDescription,
        file
      };
      setCompanyList([...companyList, newCompany]);
      // Clear input fields after adding
      setCompanyName('');
      setCtc('');
      setJobDescription('');
      setFile(null);
    } else {
      alert("Please enter company name and job description.");
    }
  };

  // Function to handle file input change
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  // Function to delete a company from the list
  const deleteCompany = (index) => {
    const updatedList = [...companyList];
    updatedList.splice(index, 1);
    setCompanyList(updatedList);
  };

  // Function to toggle details display
  const toggleDetails = (index) => {
    const updatedList = [...companyList];
    updatedList[index].showDetails = !updatedList[index].showDetails;
    setCompanyList(updatedList);
  };

  return (
    <div className="container">
      <h2>Company Details</h2>
      <div className="form-group">
        <label htmlFor="companyName">Company Name:</label>
        <input type="text" id="companyName" name="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
      </div>

      <div className="form-group">
        <label htmlFor="ctc">CTC:</label>
        <input type="text" id="ctc" name="ctc" value={ctc} onChange={(e) => setCtc(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="jobDescription">Job Description:</label>
        <textarea id="jobDescription" name="jobDescription" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} rows="4" required></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="file">Upload PDF File:</label>
        <input type="file" id="file" name="file" onChange={handleFileChange} />
      </div>

      <input type="submit" value="Add Company" onClick={addCompany} />

      <h3>Company List</h3>

      <ul className="company-list">
        {companyList.map((company, index) => (
          <li key={index} className="company-item" onClick={() => toggleDetails(index)}>
            <strong>{company.companyName}</strong>
            {company.showDetails && (
              <div className="details">
                <strong>Company Name:</strong> {company.companyName}<br />
                {company.ctc && <><strong>CTC:</strong> {company.ctc}<br /></>}
                <strong>Job Description:</strong> {company.jobDescription}<br />
                {company.file && <a href={URL.createObjectURL(company.file)} target="_blank">View PDF File</a>}
                <button onClick={() => deleteCompany(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyManagement;

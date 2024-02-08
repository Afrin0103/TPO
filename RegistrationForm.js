import React, { useState } from 'react';
import './register.css';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        personalEmail: '',
        collegeEmail: '',
        contactNumber: '',
        dob: '',
        yearOfPassing: '',
        collegeIdNumber: '',
        sscPercentage: '',
        sscYearOfPassing: '',
        hscPercentage: '',
        hscYearOfPassing: '',
        diplomaPercentage: '',
        diplomaYearOfPassing: '',
        gender: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Log form data on submit
        // You can add logic here to handle form submission
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="container">
            <header>Registration Form</header>
            <form onSubmit={handleSubmit}>
                <div className="form first">
                    <div className="personal details">
                        <span className="title">Personal Details</span>
                        <div className="fields">

                            <div className="input-field">
                                <label>First Name</label>
                                <input type="text" placeholder="Your answer" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>Middle Name</label>
                                <input type="text" placeholder="Your answer" name="middleName" value={formData.middleName} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>Last Name</label>
                                <input type="text" placeholder="Your answer" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>Personal Email</label>
                                <input type="email" placeholder="Your answer" name="personalEmail" value={formData.personalEmail} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>College Email</label>
                                <input type="email" placeholder="Your answer" name="collegeEmail" value={formData.collegeEmail} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>Contact Number</label>
                                <input type="number" placeholder="Your answer" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>Date of Birth</label>
                                <input type="date" placeholder="Your answer" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>Gender</label>
                                <select name="gender" value={formData.gender} onChange={handleInputChange} required>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="details ID">
                        <span className="title">Educational Details</span>
                        <div className="fields">

                            <div className="input-field">
                                <label>Year of Passing</label>
                                <input type="number" placeholder="Your answer" name="yearOfPassing" value={formData.yearOfPassing} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>College ID Number</label>
                                <input type="text" placeholder="Your answer" name="collegeIdNumber" value={formData.collegeIdNumber} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>SSC Percentage</label>
                                <input type="text" placeholder="Your answer" name="sscPercentage" value={formData.sscPercentage} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>SSC Year of Passing</label>
                                <input type="text" placeholder="Your answer" name="sscYearOfPassing" value={formData.sscYearOfPassing} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>HSC Percentage</label>
                                <input type="text" placeholder="Your answer" name="hscPercentage" value={formData.hscPercentage} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>HSC Year of Passing</label>
                                <input type="number" placeholder="Your answer" name="hscYearOfPassing" value={formData.hscYearOfPassing} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>Diploma Aggregate Percentage</label>
                                <input type="text" placeholder="Your answer" name="diploma" value={formData.diploma} onChange={handleInputChange} required />
                            </div>

                            <div className="input-field">
                                <label>Diploma Year of Passing</label>
                                <input type="number" placeholder="Your answer" name="diplomayearOfPassing" value={formData.diplomayearOfPassing} onChange={handleInputChange} required />
                            </div>     
                        </div>

                        <button className="nextBtn" type="submit">
                            <span className="btnText">Submit</span>
                            <i className="uil uil-navigator"></i>
                        </button>

                        <div className="login">
                            <a href="./login.html" className="hero-btn">Already have an account?</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;

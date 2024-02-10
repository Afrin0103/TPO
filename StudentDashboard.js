import React from 'react';

class StudentDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCompaniesData: [
        { name: "ABC Inc.", details: "Software Developer | CTC: 10 LPA", registrationLink: "registration_form.html?company=ABC Inc." },
        { name: "XYZ Corp.", details: "Data Analyst | CTC: 8 LPA", registrationLink: "registration_form.html?company=XYZ Corp." },
        { name: "EFG Ltd.", details: "Business Analyst | CTC: 9 LPA", registrationLink: "registration_form.html?company=EFG Ltd." }
      ],
      pastCompaniesData: [
        { name: "PQR Solutions", details: "Software Engineer | CTC: 9.5 LPA", registrationLink: "registration_form.html?company=PQR Solutions" },
        { name: "LMN Technologies", details: "Systems Engineer | CTC: 7.5 LPA", registrationLink: "registration_form.html?company=LMN Technologies" }
      ]
    };
  }

  renderCompanies(companies) {
    return companies.map((company, index) => (
      <li key={index} className="company">
        <span className="companyName"><a href={company.registrationLink}>{company.name}</a></span>
        <div className="companyDetails">{company.details}</div>
      </li>
    ));
  }

  render() {
    return (
      <div className="container">
        <h2>Student Dashboard</h2>

        <h3>New Companies</h3>
        <ul className="newCompanies">
          {this.renderCompanies(this.state.newCompaniesData)}
        </ul>

        <h3>Past Companies</h3>
        <ul className="pastCompanies">
          {this.renderCompanies(this.state.pastCompaniesData)}
        </ul>
      </div>
    );
  }
}

export default StudentDashboard;

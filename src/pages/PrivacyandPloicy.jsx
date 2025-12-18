import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container my-5 px-3 px-md-5">

      <div className="text-center mb-4">
        <h1 className="fw-bold">Privacy Policy</h1>
        <p className="text-muted">
          Last updated: {new Date().toLocaleDateString("en-GB")}
        </p>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body p-4">

          <h5>1. Information We Collect</h5>
          <p className="text-muted">
            The Go-Cut Vendor App collects business-related information during
            vendor registration, including salon name, mobile number, seating
            capacity, salon address, city, pincode, category selection, salon
            logo, and verification documents.
          </p>

          <h5>2. Location Information</h5>
          <p className="text-muted">
            We collect latitude and longitude to accurately display your salon
            on maps and enable nearby customer discovery. Location data is used
            strictly for operational purposes.
          </p>

          <h5>3. Profile Information</h5>
          <p className="text-muted">
            Vendors may update personal profile details such as full name, email
            address, and designation after registration. These details are used
            for communication and account identification.
          </p>

          <h5>4. Use of Information</h5>
          <p className="text-muted">
            Information collected is used for vendor onboarding, account
            verification, admin approval, service listing, and operational
            communication.
          </p>

          <h5>5. Data Security</h5>
          <p className="text-muted">
            We implement appropriate technical and organizational safeguards to
            protect vendor data from unauthorized access or misuse.
          </p>

          <h5>6. Contact</h5>
          <p className="text-muted">
            For privacy-related queries, contact us at{" "}
            <a href="mailto:support@gocutapp.com">support@gocutapp.com</a>
          </p>

        </div>
      </div>

    </div>
  );
};

export default PrivacyPolicy;

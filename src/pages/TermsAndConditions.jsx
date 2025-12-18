import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container my-5 px-3 px-md-5">

      <div className="text-center mb-4">
        <h1 className="fw-bold">Terms & Conditions</h1>
        <p className="text-muted">
          Last updated: {new Date().toLocaleDateString("en-GB")}
        </p>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body p-4">

          <h5>1. Vendor Registration</h5>
          <p className="text-muted">
            Vendors must provide accurate salon information including business
            details, address, location, and verification documents during
            registration.
          </p>

          <h5>2. Approval Process</h5>
          <p className="text-muted">
            All vendor accounts are subject to manual admin approval. Go-Cut
            reserves the right to approve or reject any vendor application.
          </p>

          <h5>3. Profile Updates</h5>
          <p className="text-muted">
            Vendors may update profile details such as full name, email, and
            designation after registration. Salon details may require admin
            review for changes.
          </p>

          <h5>4. Accuracy of Information</h5>
          <p className="text-muted">
            Providing false, misleading, or incomplete information may result
            in suspension or permanent termination of the vendor account.
          </p>

          <h5>5. Platform Usage</h5>
          <p className="text-muted">
            Go-Cut acts as a technology platform connecting vendors with
            customers. Go-Cut does not provide salon services directly.
          </p>

          <h5>6. Termination</h5>
          <p className="text-muted">
            Go-Cut reserves the right to suspend or terminate vendor accounts
            that violate platform policies or misuse the application.
          </p>

        </div>
      </div>

    </div>
  );
};

export default TermsAndConditions;

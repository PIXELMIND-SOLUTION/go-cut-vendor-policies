import React from "react";

const CancellationPolicy = () => {
  return (
    <div className="container my-5 px-3 px-md-5">

      <div className="text-center mb-4">
        <h1 className="fw-bold">Cancellation Policy</h1>
        <p className="text-muted">
          Last updated: {new Date().toLocaleDateString("en-GB")}
        </p>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body p-4">

          <h5>1. Vendor Availability</h5>
          <p className="text-muted">
            Vendors are responsible for maintaining accurate availability and
            service details within the Go-Cut Vendor App.
          </p>

          <h5>2. Salon-Initiated Cancellations</h5>
          <p className="text-muted">
            If a salon cancels a confirmed booking due to unforeseen
            circumstances, vendors must update customers promptly through the
            platform.
          </p>

          <h5>3. Repeated Cancellations</h5>
          <p className="text-muted">
            Excessive or repeated cancellations may impact vendor visibility or
            lead to account review by the Go-Cut admin team.
          </p>

          <h5>4. Responsibility</h5>
          <p className="text-muted">
            Vendors are solely responsible for service fulfillment, staff
            availability, and customer satisfaction.
          </p>

          <h5>5. Support</h5>
          <p className="text-muted">
            For assistance regarding cancellations, contact{" "}
            <a href="mailto:support@gocutapp.com">support@gocutapp.com</a>
          </p>

        </div>
      </div>

    </div>
  );
};

export default CancellationPolicy;

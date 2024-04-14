import React from "react";
import { Link } from "react-router-dom";
const PaymentSuccessPage = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Paypal Success</h1>
      <div className="d-flex justify-content-center mt-5">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;

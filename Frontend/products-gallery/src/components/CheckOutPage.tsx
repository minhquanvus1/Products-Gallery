import React, { useState } from "react";
import PayPalButton from "./PayPalButton";
import { useParams, useLocation } from "react-router-dom";
import { baseURL } from "../baseUrl";

const CheckOutPage = () => {
  const { id } = useParams<{ id: string }>();
  const [amount, setAmount] = useState(sessionStorage.getItem("productPrice"));
  const [currency, setCurrency] = useState("USD");
  const [description, setDescription] = useState("");
  //   const location = useLocation();
  //   console.log("location state is", location.state.productTitle);
  //   console.log("locationsearch is", location.search);
  //   console.log("id is", id);
  //   console.log("location titel is", location.state.productTitle);
  //   const { productTitle, productPrice } = location.state;
  // const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(
  //       `${baseURL}/payment/create?method=paypal&amount=${amount}&currency=${currency}&description=${description}`,
  //       {
  //         method: "POST",
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("failed to fetch hello from Spring Boot");
  //     }
  //     const approvalUrl = await response.text();
  //     console.log("approvalUrl in checkout page is", approvalUrl);
  //     console.log("window href is", window.location.href);
  //     sessionStorage.setItem("approvalUrl in checkout", approvalUrl);
  //     sessionStorage.setItem("window href in checkout", window.location.href);
  //     window.location.href = approvalUrl; // Redirect user to PayPal approval page
  //   } catch (error) {
  //     console.error("error fetching hello from Spring Boot", error);
  //   }
  // };
  return (
    <div className="container">
      <h1 className="text-center mt-5">{`Paypal Payment for Product: ${sessionStorage.getItem(
        "productTitle"
      )}`}</h1>
      <form className="mt-5 card p-3">
        <div className="mb-3">
          <label htmlFor="method" className="form-label">
            Payment method
          </label>
          <input
            id="method"
            type="text"
            className="form-control"
            name="method"
            value="Paypal"
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            className="form-control"
            name="amount"
            value={amount!}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="currency" className="form-label">
            Currency
          </label>
          <select
            className="form-control"
            id="currency"
            name="currency"
            defaultValue={currency}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            type="text"
            className="form-control"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center">
          {/* <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Pay with Paypal
          </button> */}
          <PayPalButton
            amount={amount!}
            description={description}
            currency={currency}
          ></PayPalButton>
        </div>
      </form>
    </div>
  );
};

export default CheckOutPage;

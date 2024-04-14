import React from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../baseUrl";

interface PayPalButtonProps {
  amount: string;
  currency: string;
  description: string;
}
const PayPalButton: React.FC<PayPalButtonProps> = ({
  amount,
  currency,
  description,
}) => {
  //   console.log("amount in paypalbutton", amount);
  const navigate = useNavigate();
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      const response = await fetch(
        `${baseURL}/payment/create?method=paypal&amount=${amount}&currency=${currency}&description=${description}`,
        {
          method: "POST",
        }
      );
      if (!response.ok) {
        throw new Error("failed to fetch hello from Spring Boot");
      }
      const approvalUrl = await response.text();
      console.log("approval url is", approvalUrl);
      sessionStorage.setItem("approvalUrl", approvalUrl);
      window.location.href = approvalUrl; // Redirect user to PayPal approval page
      //   navigate(`window.location.origin/payment/success/${approvalUrl}`); // Redirect user to PayPal approval page
      sessionStorage.clear();
    } catch (error) {
      console.error("error fetching hello from Spring Boot", error);
    }
  };
  return (
    <button className="btn btn-info" onClick={handleClick}>
      Pay with PayPal
    </button>
  );
};

export default PayPalButton;

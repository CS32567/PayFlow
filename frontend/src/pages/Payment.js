import { useState } from "react";

import API from "../services/api";

function Payment() {
  const [merchant, setMerchant] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const handlePayment = async () => {
    try {
      const response =
        await API.post("/pay", {
          merchant,
          amount,
        });

      alert(response.data.message);
    } catch (error) {
      console.log(error);

      alert("Payment failed");
    }
  };

  return (
    <div className="page">
      <h1>Merchant Payment</h1>

      <input
        type="text"
        placeholder="Merchant Name"
        value={merchant}
        onChange={(e) =>
          setMerchant(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
      />

      <button onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
}

export default Payment;
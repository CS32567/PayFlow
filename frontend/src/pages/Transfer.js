import { useState } from "react";

import API from "../services/api";

function Transfer() {
  const [sender, setSender] =
    useState("");

  const [receiver, setReceiver] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const handleTransfer = async () => {
    try {
      const response =
        await API.post("/transfer", {
          sender,
          receiver,
          amount,
        });

      alert(response.data.message);
    } catch (error) {
      console.log(error);

      alert("Transfer failed");
    }
  };

  return (
    <div className="page">
      <h1>Transfer Money</h1>

      <input
        type="text"
        placeholder="Sender"
        value={sender}
        onChange={(e) =>
          setSender(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Receiver"
        value={receiver}
        onChange={(e) =>
          setReceiver(e.target.value)
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

      <button onClick={handleTransfer}>
        Transfer
      </button>
    </div>
  );
}

export default Transfer;
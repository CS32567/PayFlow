import { useState } from "react";

import API from "../services/api";

function AddMoney() {
  const [name, setName] =
    useState("");

  const [balance, setBalance] =
    useState("");

  const handleAddMoney = async () => {
    try {
      const response =
        await API.post(
          "/add-money",
          {
            name,
            balance,
          }
        );

      alert(response.data.message);

      setName("");
      setBalance("");
    } catch (error) {
      console.log(error);

      alert("Failed to add money");
    }
  };

  return (
    <div className="page">
      <h1>Add Money</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Enter Amount"
        value={balance}
        onChange={(e) =>
          setBalance(e.target.value)
        }
      />

      <button onClick={handleAddMoney}>
        Add Money
      </button>
    </div>
  );
}

export default AddMoney;
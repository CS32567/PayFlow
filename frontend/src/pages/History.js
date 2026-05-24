import { useEffect, useState } from "react";

import API from "../services/api";

function History() {
  const [transactions, setTransactions] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response =
        await API.get("/history");

      setTransactions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredTransactions =
    transactions.filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="page">
      <h1>Transaction History</h1>

      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {filteredTransactions.length ===
      0 ? (
        <div className="card">
          <p>No transactions found</p>
        </div>
      ) : (
        filteredTransactions.map(
          (item, index) => (
            <div
              key={index}
              style={{
                backgroundColor:
                  item.status ===
                  "Failed"
                    ? "#fee2e2"
                    : "#dcfce7",

                border:
                  item.status ===
                  "Failed"
                    ? "2px solid red"
                    : "2px solid green",

                padding: "15px",

                marginBottom: "10px",

                borderRadius: "10px",
              }}
            >
              <h3>{item.type}</h3>

              <p>
                Name: {item.name}
              </p>

              <p>
                Amount:
                ₹{item.amount}
              </p>

              <p>
                Status:
                <strong>
                  {" "}
                  {item.status}
                </strong>
              </p>

              <p>
                Date:
                {" "}
                {item.created_at}
              </p>
            </div>
          )
        )
      )}
    </div>
  );
}

export default History;
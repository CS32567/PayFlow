import { useEffect, useState } from "react";

import API from "../services/api";

function Dashboard() {
  const [summary, setSummary] =
    useState({});

  const [walletBalance, setWalletBalance] =
    useState(0);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const summaryResponse =
        await API.get("/summary");

      const balanceResponse =
        await API.get(
          "/wallet-balance"
        );

      setSummary(summaryResponse.data);

      setWalletBalance(
        balanceResponse.data.totalBalance
      );

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="page">
        <h1>Loading Dashboard...</h1>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          className="card"
          style={{
            backgroundColor: "#0f172a",
            color: "white",
            width: "220px",
          }}
        >
          <h3>Wallet Balance</h3>

          <h1>
            ₹{walletBalance}
          </h1>
        </div>

        <div
          className="card"
          style={{
            backgroundColor: "#1e293b",
            color: "white",
            width: "220px",
          }}
        >
          <h3>Total Transfers</h3>

          <h1>
            {summary.totalTransfers}
          </h1>
        </div>

        <div
          className="card"
          style={{
            backgroundColor: "#166534",
            color: "white",
            width: "220px",
          }}
        >
          <h3>Total Payments</h3>

          <h1>
            {summary.totalPayments}
          </h1>
        </div>

        <div
          className="card"
          style={{
            backgroundColor: "#1d4ed8",
            color: "white",
            width: "220px",
          }}
        >
          <h3>Transfer Amount</h3>

          <h1>
            ₹{summary.transferAmount}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
function WalletCard() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#0f172a",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "220px",
        }}
      >
        <h3>Wallet Balance</h3>
        <h1>₹25,000</h1>
      </div>

      <div
        style={{
          backgroundColor: "#166534",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "220px",
        }}
      >
        <h3>Total Received</h3>
        <h1>₹40,000</h1>
      </div>

      <div
        style={{
          backgroundColor: "#1d4ed8",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "220px",
        }}
      >
        <h3>Total Sent</h3>
        <h1>₹15,000</h1>
      </div>

      <div
        style={{
          backgroundColor: "#b91c1c",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "220px",
        }}
      >
        <h3>Expenses</h3>
        <h1>₹10,000</h1>
      </div>
    </div>
  );
}

export default WalletCard;
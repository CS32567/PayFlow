function TransactionCard({
  type,
  amount,
  status,
  date,
}) {
  return (
    <div
      style={{
        border:
          status === "Failed"
            ? "2px solid red"
            : "1px solid #ccc",

        backgroundColor:
          status === "Failed"
            ? "#fee2e2"
            : "white",

        padding: "15px",

        marginBottom: "10px",

        borderRadius: "8px",
      }}
    >
      <h3>{type}</h3>

      <p>Amount: ₹{amount}</p>

      <p>
        Status:
        <strong> {status}</strong>
      </p>

      <p>Date: {date}</p>

      {status === "Failed" && (
        <p style={{ color: "red" }}>
          Insufficient Balance
        </p>
      )}
    </div>
  );
}

export default TransactionCard;
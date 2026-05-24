function AdminAnalytics() {
  return (
    <div className="page">
      <h1>Admin Analytics</h1>

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
          <h3>Total Users</h3>
          <h1>120</h1>
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
          <h3>Total Transactions</h3>
          <h1>560</h1>
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
          <h3>Failed Transactions</h3>
          <h1>12</h1>
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
          <h3>Total Revenue</h3>
          <h1>₹2,50,000</h1>
        </div>
      </div>
    </div>
  );
}

export default AdminAnalytics;
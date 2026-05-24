import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#041230",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "white" }}>
        PayFlow
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/add-money"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Add Money
        </Link>

        <Link
          to="/transfer"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Transfer
        </Link>

        <Link
          to="/payment"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Payment
        </Link>

        <Link
          to="/history"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          History
        </Link>

        <Link
          to="/admin"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Admin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
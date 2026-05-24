import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import AddMoney from "./pages/AddMoney";
import Transfer from "./pages/Transfer";
import Payment from "./pages/Payment";
import History from "./pages/History";
import AdminAnalytics from "./pages/AdminAnalytics";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/add-money"
          element={<AddMoney />}
        />

        <Route
          path="/transfer"
          element={<Transfer />}
        />

        <Route
          path="/payment"
          element={<Payment />}
        />

        <Route
          path="/history"
          element={<History />}
        />

        <Route
          path="/admin"
          element={<AdminAnalytics />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
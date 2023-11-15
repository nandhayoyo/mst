import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MovieDetailPage from "./pages/MovieDetailPage";
import "./App.css";
import { Toaster } from "react-hot-toast";
import CheckoutPage from "./pages/CheckoutPage";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;

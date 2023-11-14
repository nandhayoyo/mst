import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CartPage from "./pages/CartPage.jsx";
import MovieDetailPage from "./pages/MovieDetailPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;

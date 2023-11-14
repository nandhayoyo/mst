import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <>
      <Router>
        {/* <Toaster position="bottom-right" reverseOrder={false} />{" "} */}{" "}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} />
        </Routes>{" "}
      </Router>
    </>
  );
}

export default App;

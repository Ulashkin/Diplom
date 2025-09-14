import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Імпортуємо сторінки
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import CarCard from "./pages/CarCard/CarCard";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <Router>
      <Routes>
        {/* маршрути */}
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/car/:id" element={<CarCard />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;


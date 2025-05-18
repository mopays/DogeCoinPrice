// App.jsx or App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dividend from "./pages/Dividend";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dividend" element={<Dividend />} />
      </Routes>
    </Router>
  );
}

export default App;

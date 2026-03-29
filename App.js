import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Vendors from "./pages/Vendors";
import RFQ from "./pages/RFQ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/rfq" element={<RFQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
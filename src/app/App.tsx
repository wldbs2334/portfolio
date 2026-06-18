import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./components/HomePage";
import { PortfolioDetail } from "./components/PortfolioDetail";

export default function App() {
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <BrowserRouter>
      <div className="w-full h-screen overflow-hidden bg-background">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

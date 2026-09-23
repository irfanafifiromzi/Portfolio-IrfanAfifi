import { Routes, Route } from "react-router-dom";
// `/react` entry point, not `/next` — this is a Vite + React app, not Next.js.
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

const App = () => {
  return (
    <div className="relative overflow-x-hidden bg-ink-100 text-ink-900">
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<ProjectDetailPage />} />
      </Routes>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;

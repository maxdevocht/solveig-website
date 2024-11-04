import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/work/:projectId" element={<ProjectPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

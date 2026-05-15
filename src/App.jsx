import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import ProjectDetail from "./components/ProjectDetail"; // We will create this next
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/projects" replace />} />

          {/* Projects is now a parent route */}
          <Route path="projects" element={<Projects />}>
            <Route path=":projectId" element={<ProjectDetail />} />
          </Route>

          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

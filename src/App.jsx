import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import ScrollToTop from './helper/ScrollToTop';

function LayoutWrapper() {
  const location = useLocation();
  const isProjectsRoute = location.pathname.startsWith('/projects');
  const variant = isProjectsRoute ? "projects" : "portfolio";

  return (
    <>
      <Navbar variant={variant} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
      <Footer variant={variant} />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LayoutWrapper />
    </Router>
  );
}

export default App;
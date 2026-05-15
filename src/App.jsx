import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import GalleryPage from './pages/Gallery';
import ScrollToTop from './helper/ScrollToTop';

function LayoutWrapper() {
  const location = useLocation();
  const isProjectsRoute = location.pathname.startsWith('/projects');
  const isGalleryRoute = location.pathname.startsWith('/gallery');
  const variant = (isProjectsRoute || isGalleryRoute) ? "projects" : "portfolio";

  return (
    <>
      <Navbar variant={variant} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/gallery" element={<GalleryPage />} />
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
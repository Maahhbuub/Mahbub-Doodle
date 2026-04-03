import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeLayout from './layouts/HomeLayout';
import ProjectsLayout from './layouts/ProjectsLayout';

import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

import ScrollToTop from './helper/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<ProjectsLayout />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
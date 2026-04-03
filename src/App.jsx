import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import ProjectsLayout from './layouts/ProjectsLayout';

import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Routes>

        {/* Main Website */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Separate Website */}
        <Route element={<ProjectsLayout />}>
          <Route path="/projects" element={<Projects />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
// layouts/ProjectsLayout.jsx
import { Outlet } from 'react-router-dom';

export default function ProjectsLayout() {
    return (
        <main>
            {/* Different UI / no navbar */}
            <Outlet />
        </main>
    );
}
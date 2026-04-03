import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';

export default function ProjectsLayout() {
    return (
        <>
            <Navbar variant="projects" />
            <main>
                <Outlet />
            </main>
        </>
    );
}
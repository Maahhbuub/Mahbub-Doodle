import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import CompetitiveProgramming from '../components/CompetitiveProgramming/CompetitiveProgramming';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact/Contact';

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <CompetitiveProgramming />
            <Projects />
            <Experience />
            <Contact />
        </>
    )
}

export default Home
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import CompetitiveProgramming from '../components/CompetitiveProgramming/CompetitiveProgramming';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import Achievements from '../components/Achievements/Achievements';
import Gallery from '../components/Gallery/Gallery';
import Contact from '../components/Contact/Contact';

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <CompetitiveProgramming />
            <Projects limit={6} showMoreBtn={true} />
            <Experience />
            <Achievements />
            <Gallery limit={6} showMoreBtn={true} />
            <Contact />
        </>
    )
}

export default Home
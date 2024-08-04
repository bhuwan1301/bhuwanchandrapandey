import './App.css'
import Welcomesection from './Welcomesection/Welcomesection'
import Aboutme from './Aboutme/Aboutme'
import Project1 from './Projects/Project1/Project1'
import Project2 from './Projects/Project2/Project2'
import { motion, useScroll, useSpring } from "framer-motion"


function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="scrollindicator" style={{ scaleX }}></motion.div>
      <div className='maincontainer'>
        <motion.div
          className="nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </nav>
        </motion.div>

        <div
          className="notnav">
          <Welcomesection />

          <Aboutme />

          <div className="projectsshowcase" id='projects'>
            <p>Projects Showcase</p>
          </div>

          <Project1 />
          <Project2 />
        </div>

      </div>
    </>
  )
}

export default App
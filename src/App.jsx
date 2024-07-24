import './App.css'
import Welcomesection from './Welcomesection/Welcomesection'
import Aboutme from './Aboutme/Aboutme'
import Project1 from './Projects/Project1/Project1'
import Project2 from './Projects/Project2/Project2'

function App() {

  return (
    <div className='maincontainer'>
      <div className="nav">
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <div className="notnav">
        <Welcomesection />

        <Aboutme />

        <div className="projectsshowcase" id='projects'>
          <p>Projects Showcase</p>
        </div>

        <Project1 />
        <Project2 />
      </div>

    </div>
  )
}

export default App
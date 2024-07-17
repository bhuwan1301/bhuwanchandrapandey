import './Aboutme.css'
import mypic from '../assets/mypic.jpg'

function Aboutme() {
    return (
        <>
            <div className="aboutmecontainer" id='about'>
                <div className="aboutme">
                    <h1>About me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae veritatis obcaecati alias deleniti voluptate animi repellat earum incidunt consequuntur, corrupti qui non ab ad, ullam rem officia quibusdam reiciendis.</p>
                </div>

                <img src={mypic} alt="mypic" />
            </div>

            <div className="detailsSlide">
                <div className="detailsSlideContainer">
                    <h2>Problems Solved</h2>
                    <p>Solved 135+ problems on online platforms (leetcode and geeks for geeks)</p>
                </div>
                <div className="detailsSlideContainer" id='secondlastslidecontainer'>
                    <h2>Known Programing Languages</h2>
                    <ul>
                        <li>C++</li>
                        <li>Python</li>
                        <li>Javascript</li>
                        <li>C</li>
                    </ul>
                    <p>Prefered Language: C++</p>
                </div>
                {/* <div className="detailsSlideContainer">
                <h2>Leetcode rank</h2>
                
            </div> */}
            
            <div className="detailsSlideContainer">
                <h2>Projects</h2>
                <p>2 projects made</p>
            </div>

            <div className="detailsSlideContainer" id='lastslidecontainer'>
                <h2>Experience in</h2>
                <ul>
                    <li>DSA</li>
                    <li>App Dev</li>
                    <li>Web Dev</li>
                </ul>
            </div>

            </div>
        </>
    )
}

export default Aboutme
import '../Projects.css'
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import './project2.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Project1() {
    const [showgallery, setShowgallery] = useState(false)

    function handleShowgallery() {
        setShowgallery(!showgallery);
    }

    return (
        <div>
            <motion.div
                className="projectholder"
                id='project2'
                initial={{ scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
            >
                <h2>Kaam Kaaj</h2>

                <p>Kaam Kaaj is a simple and efficient todo list app designed to help you manage your tasks seamlessly. Utilizing local storage, it securely saves your tasks locally. You can effortlessly add and delete tasks, while checkboxes enable easy tracking of completed tasks. Stay organized and productive with Kaam Kaaj.</p>

                <div className="visitptojectbutton">
                    <a href="https://github.com/bhuwan1301/KaamKaaj/releases" target='_blank'>Visit Project</a>
                </div>

                <div className="showgallery">
                    <button onClick={handleShowgallery}>
                        Show Gallery
                    </button>
                </div>

                <div
                    className="photos"
                    style={{
                        display: showgallery ? 'flex' : 'none',
                    }}
                >
                    <img src={pic1} alt="Home page" />
                    <img src={pic2} alt="Home page" />
                    <img src={pic3} alt="Home page" />
                </div>

            </motion.div>
        </div>
    )
};
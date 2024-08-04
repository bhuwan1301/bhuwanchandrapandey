import '../Projects.css'
import homepic from './home.png'
import note from './note.png'
import sign from './signIn.png'
import './project1.css'
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
                id='project1'
                initial={{ scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
            >
                <h2>NoteDown</h2>

                <p>NoteDown is a user-friendly application designed for effortless note-taking. Create, edit, and delete your notes with ease, all in one intuitive platform. Whether for work, study, or personal use, NoteDown makes organizing your thoughts simple and efficient.1</p>
                <p>You need to create an account to use NoteDown, in order to save your data. You can access your notes in any mobile device by signing in to your account.</p>

                <div className="visitptojectbutton">
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="https://github.com/bhuwan1301/NoteDown/releases" target='_blank'>Visit Project</motion.a>
                </div>

                <div className="showgallery">
                    <motion.button
                        id='showgallerybutton1'
                        onClick={handleShowgallery}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Show Gallery
                    </motion.button>
                </div>

                <div
                    className="photos"
                    style={{
                        display: showgallery ? 'flex' : 'none',
                    }}
                >
                    <img src={sign} alt="Home page" />
                    <img src={homepic} alt="Home page" />
                    <img src={note} alt="Home page" />
                </div>

            </motion.div>
        </div>
    )
};
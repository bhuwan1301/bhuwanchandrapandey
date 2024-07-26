import '../Projects.css'
import homepic from './home.png'
import note from './note.png'
import sign from './signIn.png'
import './project1.css'
import { motion } from 'framer-motion'


export default function Project1() {
    return (
        <div>
            <motion.div
                className="projectholder"
                id='project1'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
            >
                <h2>NoteDown</h2>

                <p>NoteDown is a user-friendly application designed for effortless note-taking. Create, edit, and delete your notes with ease, all in one intuitive platform. Whether for work, study, or personal use, NoteDown makes organizing your thoughts simple and efficient.1</p>
                <p>You need to create an account to use NoteDown, in order to save your data. You can access your notes in any mobile device by signing in to your account.</p>

                <div className="visitptojectbutton">
                    <a href="https://github.com/bhuwan1301/NoteDown/releases" target='_blank'>Visit Project</a>
                </div>

                <div className="photos">
                    <img src={sign} alt="Home page" />
                    <img src={homepic} alt="Home page" />
                    <img src={note} alt="Home page" />
                </div>

            </motion.div>
        </div>
    )
};
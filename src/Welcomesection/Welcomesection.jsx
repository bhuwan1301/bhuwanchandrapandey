import './Welcomesection.css'
import { motion } from "framer-motion"

function Welcomesection() {
    return (
        <>
            <motion.div
                className="welcome"
                id='home'
                initial={{ scale: 0.9 }}
                animate={{ scale: [0.9, 1] }}
                transition={{ duration: 1 }}
            >
                <motion.h2
                    initial={{ x: -250 }}
                    animate={{ x: [-250, 0] }}
                    transition={{ duration: 1 }}
                >Welcome! My name is
                </motion.h2>
                <motion.h1
                    initial={{ x: 250 }}
                    animate={{ x: [250, 0] }}
                    transition={{ duration: 1 }}
                >
                    Bhuwan Chandra Pandey
                </motion.h1>
                <motion.h2
                    initial={{ x: -250 }}
                    animate={{ x: [-250, 0] }}
                    transition={{ duration: 1 }}
                >
                    and I'm always trying to be a better version of myself.
                </motion.h2>
            </motion.div>
        </>
    )
}

export default Welcomesection
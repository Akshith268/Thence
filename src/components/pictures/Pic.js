import React from 'react';
import { motion } from 'framer-motion';
import './Pic.scss';

const Pic = () => {
    return (
        <div className="pic">
            <motion.div className="pic1"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img src='image.png' alt="Pic 1" />
            </motion.div>
            <motion.div className='forty'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <img src='image4.png' alt="Pic 4" />
            </motion.div>
            <motion.div className='pic2'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <img src='image2.png' alt="Pic 2" />
            </motion.div>
            <motion.div className='pic3'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <img src='image3.png' alt="Pic 3" />
            </motion.div>
        </div>
    );
}

export default Pic;

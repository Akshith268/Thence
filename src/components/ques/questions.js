import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './questions.scss';

const Questions = () => {
    const [isOpen, setIsOpen] = useState(Array(5).fill(false));

    const toggleAnswer = (index) => {
        const newIsOpen = [...isOpen];
        newIsOpen[index] = !newIsOpen[index];
        setIsOpen(newIsOpen);
    };

    const faqData = [
        { question: "Do you offer freelancers?", answer: "Answer 1 goes here." },
        { question: "What is the guarantee that I will be satisfied with the hired talent?", answer: "Answer 2 goes here." },
        { question: "Can I hire multiple talents at once?", answer: "Answer 3 goes here." },
        { question: "why should I not go to an agency directly?", answer: "Answer 4 goes here." },
        { question: "Who can help me pick a right skillset and duration for me?", answer: "Answer 5 goes here." }
    ];

    return (
        <div className="faq-section">
            <div className="faq-content">
                <div className="faq-heading">
                    <span className='mind'>What's on your mind</span>
                    <br />
                    <span className='ask'>Ask Questions</span>
                </div>
                {faqData.map((item, index) => (
                    <div key={index} className="question-answer">
                        <div className="question" onClick={() => toggleAnswer(index)}>
                            <span>{item.question}</span>
                            <span className="toggle-icon">{isOpen[index] ? '-' : '+'}</span>
                        </div>
                        <motion.div
                            className={`answer ${isOpen[index] ? 'open' : ''}`}
                            initial={{ height: 0 }}
                            animate={{ height: isOpen[index] ? 'auto' : 0 }}
                            transition={{ duration: 0.1, ease: "easeInOut" ,smooth: "easeInOut",}}
                        >
                            {item.answer}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Questions;

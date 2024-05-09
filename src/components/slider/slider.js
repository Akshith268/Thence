import React, { useState, useEffect } from 'react';
import './slider.scss';
import { FaArrowRight } from "react-icons/fa";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
        }, 5000);
        
        return () => clearInterval(intervalId);
    }, [currentSlide]);

    const scrollToBottom = () => {
        window.scrollBy({
            top: 700,
            behavior: 'smooth'
        });
    };

    const slidevariants={
        hidden:{
            x: '-100vw',
            opacity: 0
        },
        visible:{
            x: 0,
            opacity: 1,
            transition:{
                type: 'spring',
                delay: 0.5
            }
        }
    }

    return (
        <div className="slider-container" >
            <div className="slides">
                <div className={`slide ${currentSlide === 0 && 'active'}`}>
                    {/* <h2>Slide 1</h2> */}
                    <p>Enhance fortune 50 company's insights teams research capabilities</p>
                </div>
                <div className={`slide ${currentSlide === 1 && 'active'}`}>
                    {/* <h2>Slide 2</h2> */}
                    <p>Strengthen research capabilities for Fortune 50 insights teams.</p>
                </div>
                <div className={`slide ${currentSlide === 2 && 'active'}`}>
                    {/* <h2>Slide 3</h2> */}
                    <p>Fuel Fortune 50 innovation through advanced research.</p>
                </div>
            </div>
            <div className="dots">
                <span className={`dot ${currentSlide === 0 && 'active'}`} onClick={() => setCurrentSlide(0)}></span>
                <span className={`dot ${currentSlide === 1 && 'active'}`} onClick={() => setCurrentSlide(1)}></span>
                <span className={`dot ${currentSlide === 2 && 'active'}`} onClick={() => setCurrentSlide(2)}></span>
            </div>

            <br/>
            <br/>
            <br/>
            <button className="explore-button" onClick={scrollToBottom}>
                Explore more &nbsp;&nbsp; <FaArrowRight />
            </button>
        </div>
    );
};

export default Slider;

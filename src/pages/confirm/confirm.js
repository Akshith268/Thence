import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import './confirm.scss';
import { TiTick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

export default function Confirm() {
    const Navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);
    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (countdown === 0) {
            Navigate('/');
        }
    }, [countdown, Navigate]);

    const handleReturn = () => {
        Navigate('/');
    };

    return (
        <div className='Confirm'>
            <div className='top'>
                <div className='name'>
                    THENCE
                </div>
                <div>
                    <button className='return' onClick={handleReturn}>
                        <IoMdClose />
                    </button>
                </div>
            </div> <br/> <br/> <br/>

            <div className='content'>
                <div className='tick'>
                    <TiTick className='ticking' />
                </div> <br/>
                <div className='success'>
                    Success submitted
                </div> 
                <div className='congrats'>Congratulations</div>
                <br/>
                <div className='message'>
                    Your request has been successfully submitted to us. We will validate your information and reach out to you shortly with updates.
                </div>
                <br/><br/>
                <div className='redirect'>
                    Redirecting to home page in <span className='count'>{countdown} seconds...</span>
                </div>
            </div>
        </div>
    );
}

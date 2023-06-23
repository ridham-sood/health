import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getName } from '../../Auth/Auth';
import './bmi.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const BMI = () => {

    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState(0);

    const username = getName();


    async function bmiCalculator(event) {
        event.preventDefault();
        try {
            const response = await axios.request({
                method: 'GET',
                url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
                params: {
                    weight: weight,
                    height: height
                },
                headers: {
                    'X-RapidAPI-Key': '7c172e3626msh3b5d46cd066470ap1e14e8jsn9bf04a6167f3',
                    'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
                }
            });
            setBmi(response.data.bmi)
        } catch (error) {
            console.error(error);
        }
        const timer = setTimeout(() => {
            setShowValue(false)
        }, 20000);
        return () => clearTimeout(timer);
    }

    const ColorButton = styled(Button)(() => ({
        color: "#afc1de",
        backgroundColor: "#a35424",
        fontWeight: '700',
        borderRadius: '1px',
        fontSize: '20px',
        '&:hover': {
            color: "#afc1de",
            backgroundColor: '#081406'
        },
    }));

    const [showUsername, setShowUsername] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowUsername(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);



    const [showValue, setShowValue] = useState(false);

    useEffect(() => {
        if (bmi > 0) {
            setShowValue(true)
        }
    }, [bmi]);



    return (
        <div className='bmi-container'>
            <div className='bmi-title'>{showUsername ? (<div>Calculate BMI</div>) : (<div>Welcome {username}</div>)}</div>
            <form className='bmi-input'>
                <label>Weight</label>
                <input
                    type="weight"
                    placeholder="Enter Weight(in kg)"
                    value={weight}
                    onChange={(event) => {
                        setWeight(event.target.value)
                    }}
                />
                <label>Height</label>
                <input
                    type="height"
                    placeholder="Enter Height(in meter ~ 1m = 100cm)"
                    value={height}
                    onChange={(event) => {
                        setHeight(event.target.value)
                    }}
                />
                <div className=''><ColorButton variant="contained" size='large' onClick={bmiCalculator}> BMI </ColorButton></div>
            </form>
            <div className='bmi-output'>{showValue ? (<div>{username}'s BMI  {bmi?.toFixed(3)}</div>) : (<div></div>)}</div>
        </div>
    )


}

export default BMI
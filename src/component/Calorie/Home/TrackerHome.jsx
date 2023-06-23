import React from 'react'
import { useState, useEffect } from "react";
import DataCard from '../item/DataCard';
import EntryCard from '../search/EntryCard';
import './trackerhome.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const DateSwitch = () => {
    const currentDate = new Date();
    const [date, setDate] = useState(currentDate);

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

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const passingDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}${month}${year}`;
    };


    const handlePrevious = () => {
        const previousDate = new Date(date);
        previousDate.setDate(date.getDate() - 1);
        setDate(previousDate);
    };

    const handleNext = () => {
        const nextDate = new Date(date);
        nextDate.setDate(date.getDate() + 1);
        setDate(nextDate);
    };

    const [add, setAdd] = useState('');

    return (
        <div className='trackerhome-container'>
            <div className='trackerhome-date'>
                <div className=''><ColorButton variant="contained" size='large' onClick={handlePrevious}> Previous </ColorButton></div>
                <h1>{formatDate(date)}</h1>
                <div className=''><ColorButton variant="contained" size='large' onClick={handleNext}> Next </ColorButton></div>
            </div>
            <div className='trackerhome-datacard'>
                <DataCard dates={passingDate(date)} add={add} />
            </div>
            <div className='trackerhome-entrycard'>
                <EntryCard dates={passingDate(date)} setAdd={setAdd} />
            </div>

        </div>
    );
}

export default DateSwitch
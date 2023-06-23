import React, { useEffect } from 'react'
import { isLoggedIn } from './Auth';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedIn()){
            navigate("/login");
        }
    })

    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected
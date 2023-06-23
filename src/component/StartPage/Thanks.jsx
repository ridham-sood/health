import React from 'react'

import {useNavigate } from "react-router-dom";

function Thanks() {
    setTimeout(homeRedirect, 1000);
    const navigate = useNavigate();

    function homeRedirect(){
        navigate('/login')
    }

    return (
        <div>
            Thanks for Joining Us
        </div>
    )
}

export default Thanks
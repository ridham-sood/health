import React from 'react'
import Button from '@mui/material/Button';
import './home.css';
import { styled } from '@mui/material/styles';

const Home = () => {
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
  return (
    <div className='container-home'>
      <div className='container-home-heading'><div>Health</div><div>Wise</div></div>
      <div className='container-home-description'>HealthWise is a comprehensive health tracking website that empowers individuals to monitor and manage their well-being through personalized insights, data-driven recommendations, and intuitive tools.</div>
      <div className='container-home-button'>
        <div className='home-button'><ColorButton variant="contained" href="/login" size='large'> Login </ColorButton></div> 
        <div className='home-button'><ColorButton variant="contained" href="/Join" size='large'> Join </ColorButton></div>
      </div>
    </div>
  )
}

export default Home

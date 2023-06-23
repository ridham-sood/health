import React from 'react'
import './health.css'
import { useNavigate } from 'react-router-dom';


function Health() {
  const navigate = useNavigate();

  return (
    <div className='container-health'>
      <div className='health-items health-bmi' onClick={() => { navigate("/bmi") }}>
        BMI calculator
      </div>
      <div className='health-items health-gap'>
      </div>
      <div className='health-items health-calories' onClick={() => { navigate("/calorie") }}>
        Calorie's Tracker
      </div>
    </div>
  )
}

export default Health
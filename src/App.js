import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './component/StartPage/Home/Home';
import Login from './component/StartPage/Login/Login';
import Join from './component/StartPage/Join/Join';
import Thanks from './component/StartPage/Thanks';
import Health from './component/Main/Health/Health';
import BMI from './component/Main/BMI/BMI';
import Protected from './component/Auth/Protected';
import DateSwitch from './component/Calorie/Home/TrackerHome';
import CalorieTracker from './component/Calorie/CalorieTracker';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
          <Route path='/thanks' element={<Thanks />} />
          <Route path='/health' element={<Protected Component={Health} />} />
          <Route path='/bmi' element={<Protected Component={BMI} />} />
          <Route path='/calorie' element={<Protected Component={CalorieTracker} />} >
            <Route path='' element={<Protected Component={DateSwitch} />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

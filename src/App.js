import './App.css';
import {useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LiveData from './components/LiveData/LiveData'
import Login from './components/Login/Login'
import {loadUser} from './Actions/user'
import AddDevice from './components/AddDevice/AddDevice';
import Home from './components/Home/Home';
import Devices from './components/Devices/Devices';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ForgotPassword/ResetPassword';


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch])

  const {isAuthenticate} = useSelector((state)=>state.user);

  return (

  <Router>

    <Routes>
    
    {/* <Route path='/' element={<LiveData/>}></Route> */}
    <Route path='/' element={isAuthenticate? <Home/> : <Login/>}></Route>
    <Route path='/device/:id' element={isAuthenticate? <LiveData/> : <Login/>}></Route>
    <Route path='/allDevices' element={isAuthenticate? <Devices/> : <Login/>}></Route>
    <Route path='/addDevice' element={isAuthenticate? <AddDevice/> : <Login/>}></Route>
    <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
    <Route path='/password/reset/:token' element={<ResetPassword />}></Route>

    </Routes>

  </Router>

  );
}

export default App;

import React,{useEffect, useState} from 'react'
import './Devices.css'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {getDevices} from '../../Actions/device'
import DeviceCard from './DeviceCard'


const Devices = () => {

    const dispatch =  useDispatch();

    const {allDevices, loading, message, error} = useSelector(state => state.allDevices)

    useEffect(()=>{
        dispatch(getDevices());
    },[])


  return (
    <div>
        <h1>All Devices</h1>

        {
            loading ? <p>Loading...</p> :

            <div className='deviceBox'>

            {
                allDevices?.data.length > 0 ? allDevices.data.map(device => (
                    <Link to={`/device/${device.deviceId}`}><DeviceCard device={device}/></Link>
                )):<h2>No Device To show</h2>
            }
            </div>
        }

    </div>
  )
}

export default Devices
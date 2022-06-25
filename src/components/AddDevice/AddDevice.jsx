import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { addDevice } from '../../Actions/device'
import './AddDevice.css'

const AddDevice = () => {

  const dispatch =  useDispatch();

  const user = useSelector(state => state.user.user)
  // console.log(user);

  const {device, loading, message, error} = useSelector(state => state.device)

  // console.log(device);

  const [showMessage, setShowMessage] = useState(false)

  useEffect(()=>{

      setShowMessage(true);
      
      setTimeout(()=>{
        setShowMessage(false);
      },4000)
     
  },[device,error])

  const handleSubmit = async(e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {}
    for (let name of formData.keys()) {
      data[name] = formData.get(name)
    }
    data.userId = user._id
    dispatch(addDevice(data));

    document.getElementById("addDeviceForm").reset();

  }


  return (
    <div className='addDevice'>
        <h1>Add Machine</h1>
        {
          loading? <h1 className='loading'>Loading...</h1> :null
        }
        {
          showMessage && device?.message? <h2 className='loading'>{device.message}</h2>:null
        }
        {
         showMessage && error?.length>0? <h2 className='loading'>{error}</h2>:null
        }
        <form id='addDeviceForm' onSubmit={handleSubmit}>
            <label>
                User Id:
                <input value={user?._id} disabled={true} type="text" name="userId" required={true} />
            </label>
            <label>
                Device Id:
                <input type="text" name="deviceId" required={true} />
            </label>
            <label>
                Device Name:
                <input type="text" name="name" required={true} />
            </label>
            <label>
                Temperature low.:
                <input type="number" step="any" name="tempLow" required={true} />
            </label>
            <label>
                Temperature high:
                <input type="number" step="any" name="tempHigh" required={true} />
            </label>
            <label>
                Humidity low.:
                <input type="number" step="any" name="humLow" required={true} />
            </label>
            <label>
                Humidity high:
                <input type="number" step="any" name="humHigh" required={true} />
            </label>
            <br />
            <label>
                Pressure low.:
                <input type="number" step="any" name="pressLow" required={true} />
            </label>
            <label>
                Pressure high:
                <input type="number" step="any" name="pressHigh" required={true} />
            </label>
            <br />

          <button>Add</button>
            
        </form>

        <Link to='/'>Home</Link>
    </div>
  )
}

export default AddDevice
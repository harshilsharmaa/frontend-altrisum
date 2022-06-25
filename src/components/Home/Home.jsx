import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <h1>Home</h1>

            <Link className='link' to={'/addDevice'} >Add Machine</Link>
            <Link className='link' to={'/allDevices'} >All Devices</Link>

    </div>
  )
}

export default Home
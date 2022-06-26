import React from 'react'
import './DeviceCard.css'

const DeviceCard = ({device}) => {
  return (
    <div className='deviceCard'>
        <h3>{device.name}</h3>
        <h4>Device Id: {device.deviceId}</h4>
        <p>Temperature low: {device.tempLow.$numberDecimal}</p>
        <p>Temperature high:{device.tempHigh.$numberDecimal}</p>
        <p>Humidity Low: {device.humLow.$numberDecimal}</p>
        <p>Humidity Hogh: {device.humHigh.$numberDecimal}</p>
        <p>Pressure Low: {device.pressHigh.$numberDecimal}</p>
        <p>Pressure High: {device.pressHigh.$numberDecimal}</p>

    </div>
  )
}

export default DeviceCard
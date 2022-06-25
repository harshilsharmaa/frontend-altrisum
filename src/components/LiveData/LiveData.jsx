import React,{useState, useEffect} from 'react'
import io from 'socket.io-client'
import axios from "axios"
import { useSelector } from 'react-redux';


const LiveData = () => {

  const user = useSelector(state => state.user);

  const socket = io.connect('http://localhost:5000',{
    query:{
      auth:user?user:null
    }
  });
  
    const [data, setData] = useState([]);
    const [machineName, setMachineName] = useState([]);
    const [temp, setTemp] = useState([]);
    const [humidity, setHumidity] = useState([]);


    useEffect(()=>{
        socket.on("data", ({data})=>{
          
            console.log(data);
      
        })

        socket.on("updateData", ({updateMachineData})=>{
            console.log(updateMachineData)

            if(updateMachineData.values.temp){
              setTemp(updateMachineData.values.temp)
            }

            if(updateMachineData.values.humidity){
              setHumidity(updateMachineData.values.humidity)
            }

        })
    })


  return (
    <div>
      <h2>Page Under Construction</h2>
      <table>
        <tr>
          <th>Machine Name</th>
          <th>Temprature</th>
          <th>Humidity</th>
        </tr>

        <tr>
          <td>{machineName}</td>
          <td>{temp}</td>
          <td>{humidity}</td>
        </tr>

      </table>
    </div>
  )
}

export default LiveData
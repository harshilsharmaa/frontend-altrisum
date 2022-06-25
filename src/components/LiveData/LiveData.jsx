import React,{useState, useEffect} from 'react'
import io from 'socket.io-client'
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom' 
import { getLiveData } from '../../Actions/device';

// const socket = io.connect('http://localhost:5000',{
//   query:{
//     auth: auth:user?user:null
//   }
// });
const socket = io.connect('http://localhost:5000');

const LiveData = () => {

  const [temp, setTemp] = useState([]);
  const [humidity, setHumidity] = useState([]);


  const user = useSelector(state => state.user);
  const liveData = useSelector(state => state.liveData?.liveData?.data);
    const {id} = useParams();

    useEffect(() => {
      socket.auth = user?user:null;
      socket.connect();
    },[user])


  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getLiveData(id));
    },[dispatch,id]);

    useEffect(()=>{
        socket.on("data", ({data})=>{
          
            console.log(data);
            if(toString(data)===toString(liveData._id)){
                dispatch(getLiveData(id));
            }
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


    useEffect(()=>{
      setTemp(liveData?.T.$numberDecimal);
      setHumidity(liveData?.H.$numberDecimal);
    },[liveData])


  return (
    <div>
      <h2>Live Data</h2>
      <div>
        {
          liveData ? <div>
            <h4>Temperature: {temp}</h4>
            <h4>Humidity: {humidity}</h4>
          </div>:null
        }
      </div>
    </div>
  )
}

export default LiveData
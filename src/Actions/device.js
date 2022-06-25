import axios from "axios" 

export const addDevice = (deviceData)=> async(dispatch)=>{
    try {


        dispatch({
            type:"addDeviceRequest"
        })

        const {data} = await axios.post('/api/v1/device/addDevice', deviceData,{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"addDeviceSuccess",
            payload:data
        })


    } catch (error) {
        dispatch({
            type:"addDeviceFailure",
            payload:error.response.data.message
        })
    }
}



export const getDevices = ()=> async(dispatch)=>{
    try {


        dispatch({
            type:"allDeviceRequest"
        })

        const {data} = await axios.get('/api/v1/device/getDevices');
        // console.log(data);

        dispatch({
            type:"allDeviceSuccess",
            payload:data
        })


    } catch (error) {
        dispatch({
            type:"allDeviceFailure",
            payload:error.response.data.message
        })
    }
}

import axios from "axios" 

export const loginUser = (email, password)=> async(dispatch)=>{
    try {

        dispatch({
            type:"LoginRequest"
        })

        const {data} = await axios.post('/api/v1/user/login', {email, password},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"LoginSuccess",
            payload:data.user
        })


    } catch (error) {
        dispatch({
            type:"LoginFailure",
            payload:error.response.data.message
        })
    }
}
export const RegisterUser = (name, email, password)=> async(dispatch)=>{
    try {

        dispatch({
            type:"RegisterRequest"
        })

        const {data} = await axios.post('/api/user/register', {name,email, password},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"RegisterSuccess",
            payload:data.user
        })


    } catch (error) {
        dispatch({
            type:"RegisterFailure",
            payload:error.response.data.message
        })
    }
}

export const loadUser = ()=> async(dispatch)=>{
    try{
        dispatch({
            type:"LoadUserRequest"
        })

        const {data} = await axios.get('/api/v1/user/me');

        dispatch({
            type:"LoadUserSuccess",
            payload:data.user
        })
    }
    catch(error){
        dispatch({
            type:"LoadUserFailure",
            payload:error.response.data.message
        })
    }
}

export const forgotPassword = (email)=> async(dispatch)=>{
    try{
        dispatch({
            type:"ForgotPasswordRequest"
        })

        const {data} = await axios.post('/api/v1/user/forgot/password', {email},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"ForgotPasswordSuccess",
            payload:data.message
        })
    }
    catch(error){
        dispatch({
            type:"ForgotPasswordFailure",
            payload:error.response.data.message
        })
    }
}

export const resetPassword = (token, password)=> async(dispatch)=>{

    try{
        dispatch({
            type:"ResetPasswordRequest"
        })

        const {data} = await axios.put(`/api/v1/user/password/reset/${token}`, {token, password},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"ResetPasswordSuccess",
            payload:data.message
        })
    }
    catch(error){
        dispatch({
            type:"ResetPasswordFailure",
            payload:error.response.data.message
        })
    }

}
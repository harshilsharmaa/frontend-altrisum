import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { forgotPassword } from '../../Actions/user.js'


const ForgotPassword = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(false);
  
    const handleSubmit = (e)=>{
        setMessage(true);
      e.preventDefault();
      dispatch(forgotPassword(email));
    }
  
    return (
      <div className='Forgot Password'>
        <form action="" onSubmit={handleSubmit}>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Email'/>
          <button>Send</button>
          <br />
        </form>
        {
            message? <p>If This Email is registered with us then the reset password link is sent to this email</p>:null
        }
      </div>
    )
}

export default ForgotPassword
import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { loginUser } from '../../Actions/user.js'
import {Link} from 'react-router-dom'


const Login = () => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(loginUser(email, password));
  }

  return (
    <div className='login'>
      <form action="" onSubmit={handleSubmit}>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Email'/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter Password' />
        <button>Login</button>
        <br />
        <Link to="/forgotPassword">Forgot Password</Link>
      </form>
    </div>
  )
}

export default Login
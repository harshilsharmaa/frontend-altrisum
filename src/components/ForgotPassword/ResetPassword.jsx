import React,{useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { resetPassword } from '../../Actions/user'

const ResetPassword = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const { token } = params;


    const {message, error} = useSelector(state => state.resetPassword);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password !== confirmPassword){
            setShowError(true);
            return;
        }

        dispatch(resetPassword(token, password));
    }


  return (
    <div>
        <h2>Reset Password</h2>
        <form action="" onSubmit={handleSubmit}>
            <input  type="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder='Enter Password' 
            />

            <input type="password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)} 
              placeholder='Confirm Password' 
            />

            <button>Reset</button>
        </form>
        {
            message && message!=undefined? 
            <div>
                <p>Password Changed Successfully, Please Login</p>
                <Link to="/">Login</Link>
            </div>
            :null
        }
        {
            error && error!=undefined? 
            <div>
                <p>{error}</p>
                <Link to="/forgotPassword">Request Again for link</Link>
            </div>
            :null
        }
        {
            showError? 
            <div>
                <p>Password and confirm Password must be same.</p>
            </div>
            :null
        }
    </div>
  )
}

export default ResetPassword


import { useState } from 'react';
import './Login.css'
import { assets } from '../../assets/assets';
import { login, signup } from '../../../firebase';

const Login = ({ setShowLogin }) => {
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async(event) => {
    event.preventDefault();
    if(state === "Sign Up"){
      await signup(name, email, password)
    }else{
      await login(email, password)
    }
  }

  return (

    <div className='login-popup'>

      <form className="login-popip-container">

        <div className="login-popup-title">
          <h2>{state}</h2>
          <img  src={assets.cross_icon} alt="" />
        </div>

        <div className="login-popup-inputs">
          {
            state === "Login" ? <></> : <input value={name} onChange={(e) => setName(e.target.value)}
             type="text" placeholder="Your name" required />
          }
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" required />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
        </div>

        <button onClick={user_auth}>
          {state === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {state === "Login"
          ? <p>Create a new account? <span onClick={() => setState("Sign Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setState("Login")}>Login here</span></p>
        }

      </form>

    </div>
  )
}

export default Login


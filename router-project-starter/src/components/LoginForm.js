import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData , setFormData] = useState({
        email: "" , password: ""
    })
    const [showPassword , setShowPassword] = useState(false);
    function changeHandler(e) {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name] : e.target.value
        }))
    }
    function submitHandler(e) {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In")
        navigate("/dashboard")
    }
  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>Email Address <sup>*</sup></p>
            <input required type='text' value={formData.email} name='email' onChange={changeHandler} placeholder='Enter email id' />
        </label>

        <label>
            <p>Password <sup>*</sup></p>
            <input required type={showPassword ? ("text") : ("password")} value={formData.password} name='password' onChange={changeHandler} placeholder='Enter Password' />
            <span onClick={() => setShowPassword((prev => !prev))}>{showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>
            <Link to="#"><p>Forgot Password</p></Link>
        </label>

        <button>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm
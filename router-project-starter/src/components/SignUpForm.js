import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const SignUpForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate()
    const [formData , setFormData] = useState({
        email: "" , password: "" , firstName: "" , lastName: "" , confirmPassword: ""
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
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match")
            return;
        }else {
            setIsLoggedIn(true)
            toast.success("Account Created")
            navigate("/dashboard")
            
        }
    }
  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>
        <form onSubmit={submitHandler}>
            <div>
                <lable>
                <p>First Name <sup>*</sup></p>
                <input required type='text' placeholder='Enter you first name' name='firstName' value={formData.firstName} onChange={changeHandler}/>
                </lable>
                <lable>
                <p>Last Name <sup>*</sup></p>
                <input required type='text' placeholder='Enter you Last name' name='lastName' value={formData.lastName} onChange={changeHandler}/>
                </lable>
            </div>
            <lable>
                <p>Email Address<sup>*</sup></p>
                <input required type='email' placeholder='Enter you Email' name='email' value={formData.email} onChange={changeHandler}/>
            </lable>
            <div>
                <label>
                    <p>Create Password<sup>*</sup></p>
                    <input required type={showPassword ? ("text") : ("password")} value={formData.password} name='password' onChange={changeHandler} placeholder='Enter Password' />
                    <span onClick={() => setShowPassword((prev => !prev))}>{showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>
                    <Link to="#"><p>Forgot Password</p></Link>
                </label>

                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input required type={showPassword ? ("text") : ("password")} value={formData.confirmPassword} name='confirmPassword' onChange={changeHandler} placeholder='Enter Password' />
                    <span onClick={() => setShowPassword((prev => !prev))}>{showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>
                    <Link to="#"><p>Forgot Password</p></Link>
                </label>
            </div>
            <button>Create Account</button>
            
        </form>
    </div>
  )
}

export default SignUpForm
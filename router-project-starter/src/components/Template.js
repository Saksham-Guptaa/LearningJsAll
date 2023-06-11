import React from 'react'
import frameImage from "../assets/frame.png"
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
const Template = ({title , description1 , description2 , image , formType , setIsLoggedIn}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{description1}</span>
                <span>{description2}</span>
            </p>
            {formType === "signup" ? (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}
            <div>
                <div></div>
                <p>Or</p>
                <div></div>
            </div>
            <button>SignUp with Google</button>
        </div>
        <div>
            <img src={frameImage} alt="frameImage" width={558} height={504} loading="lazy"/>
            <img src={image} alt='students' width={558} heigh={504} loading='lazy' />
        </div>
    </div>
  )
}

export default Template
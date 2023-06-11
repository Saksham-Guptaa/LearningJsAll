import React, { lazy } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import { toast } from 'react-hot-toast'

const Navbar = (props) => {
    const isLoggedIn = props.isLoggedIn
    const setIsLoggedIn = props.setIsLoggedIn
  return (
    <div className='flex justify-evenly '>
        <Link to="/">
            <img src={logo} alt='logo' width={160} height={32} loading="lazy" />
        </Link>
        <nav>
            <ul className='flex gap-3'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>
        {/* Login - Signup - Logout - Dashboard */}
        <div className='flex gap-3 ml-5 mr-3'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button>Login</button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button>SignUp</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/" onClick={() => {
                    setIsLoggedIn(false);
                    toast.success("Logged Out Successfully")
                }}>
                    <button>LogOut</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button>Dashboard</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar
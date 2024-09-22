import { useState } from "react"
import { LOGO_URL } from "../utils/constants"


export const Header = () => {


const [btnName, setBtnName] = useState("Login")

    return (
      <div className="header">
        <div className="logo">
                <img src={ LOGO_URL } />
        </div>
        <div className="nav-icons">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="cart">
          <button>
          Cart
          </button>
          <button onClick={() => {
            btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")
          }}>
          {btnName}
          </button>
        </div>
        
      </div>
    )
  }
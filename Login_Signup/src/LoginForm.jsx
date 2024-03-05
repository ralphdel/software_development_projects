import React from "react"
import "./LoginForm.css"


function LoginForm() {

    return (
      <> 
        <div className="LoginForm">
            <form >
                <div className="logindetails">
                    <p>EMAIL: </p>
                    <input type="text" placeholder="enter your name " />
                </div>
                <div  className="logindetails">
                    <p>PASSWORD: </p>
                    <input type="text" placeholder="enter your password" />
                </div>
            </form>
        </div>

      
        
      </>
    )
  }
  
  export default LoginForm
  
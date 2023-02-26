import { NavLink } from "react-router-dom";
import "./Signin.css";

export function Signin(){

    return(

        
        <div className="signinContainer">
            <div className="signinForm">
                <h2 className="welcomeText">HELLO</h2>
                <h2 className="welcomeSubText">WELCOME BACK</h2>
                <div className="mb-3 form-control-group">
                    <label className="form-label">
                        Email
                    </label>
                    <input 
                    placeholder="Enter your Email"
                    type="email" name="email" className="form-control">

                    </input>
                </div>
                <div className="mb-3 form-control-group">
                    <label className="form-label">
                        Password
                    </label>
                    <input 
                      placeholder="Password"
                    type="password" name="password" className="form-control">

                    </input>
                </div>

                <div className="linkWrapper mb-3">

                    <span >
                    <input className="check" type="checkbox" ></input> &nbsp;
                    <NavLink className="sp" style={{textDecoration: 'none' , color: 'black'}} to="" >
                        Remember me
                    </NavLink>
                    </span>
                   <span  >
                   <NavLink className="sp"  style={{textDecoration: 'none' , color: 'black'}} to="">
                        Forgot Password
                    </NavLink>
                   </span>
                </div>
                <div className="btn-wrapper">
                <button className="btn btn-primary mb-3">
                    Sign In
                </button>

                </div>
                
                <span className="loginText" htmlFor="">
                Don't have an account?  &nbsp;&nbsp;
                <NavLink style={{textDecoration: 'none' , color: 'black'}} className="loginLink" to="/signup">
                Register</NavLink>
                </span>
            </div>
        </div>

        
    );

}
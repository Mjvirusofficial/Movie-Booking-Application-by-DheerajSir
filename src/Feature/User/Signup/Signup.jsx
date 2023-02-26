import { NavLink } from "react-router-dom";
import "./Signup.css";
import popcorn from '../Image/pngwing.com.png'
// import pvr from '../Image/pvr.png'

export function Signup() {

  return (

    <div className="box">
    {/* <div className="pvr">
    <img className="pv" src={pvr} alt="" />

    </div> */}
      <div className="container-fluid">
        <div className="row flex-column-reverse flex-lg-row">

          <div className="col  col-12 order-second col-md-6 mt-5">
            <img src={popcorn} className="image pop img-fluid" alt='img' />
          </div>

          <div className="col col-md-4">
            <div className="signupContainer">
              <div className="signupForm">
                <h2 className="welcomeText">WELCOME</h2>
                <h2 className="welcomeSubText">TO BOLETO</h2>
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
                <div className="mb-3 form-control-group">
                  <label className="form-label">
                    Confirm Password
                  </label>
                  <input
                    placeholder="Password"
                    type="password" name="confirmPassword" className="form-control">

                  </input>
                </div>
                <div className="btn-wrapper">
                  <button className="btn btn-success mb-3">
                    Sign Up
                  </button>

                </div>

                <span style={{fontSize:'15px'}} className="loginText" htmlFor="">
                  Already have an account?  &nbsp;&nbsp;
                  <NavLink style={{ textDecoration: 'none', color: 'black' }} className="loginLink" to="/signin">Signin</NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
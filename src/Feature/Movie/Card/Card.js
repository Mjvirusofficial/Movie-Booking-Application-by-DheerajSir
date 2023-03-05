import React from 'react'
import { NavLink } from 'react-router-dom'
import './Card.css'
function Card(mj) {
  return (
    < >
           <div className="col-12 col-md-6 col-lg-3 ">

           <div class="card ">
  <img src={mj.img} class="card-img-top m-0 cardimg" alt="..."/>
  <div class="card-body">
    <h4 class="card-title text-start"><b>{mj.title}</b></h4>
    <hr />
    <div className="rating ">
        <img src="https://pixner.net/boleto/demo/assets/images/movie/tomato.png" alt="" />
        &nbsp;         &nbsp;

        <p>88%</p>
        &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
        <img src="https://pixner.net/boleto/demo/assets/images/movie/tomato.png" alt="" />
        &nbsp;         &nbsp;

        <p>88%</p>
       
    </div>
    
    
    {/* <p class="card-text">{mj.desc}</p> */}
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    {/* <NavLink className="nav-link active " aria-current="page" to={mj.visit}><h2 className='learn'>Learn more</h2></NavLink> */}

  </div>
</div>
</div>
    </>
  )
}

export default Card
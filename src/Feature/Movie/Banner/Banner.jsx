import "./Banner.css";

export function Banner() {
    return (
        <>
        <div className="container ">
    <div className="row m-3 bx ">
    <h1 className="r1">BOOK YOUR TICKETS FOR</h1>
    </div>
    <div className="row"><h1 className="mo">MOVIES, EVENTS, SPORTS</h1>
</div>
<div className="row">
<p className="mov">
                Buy movie tickets in advance, find movie times watch trailers,
            </p>
            <p className="mov">
                Read movie reviews and much more
            </p>
</div>
        </div>


        {/* <div className='banner'>
            <h1 className='header2'>BOOK YOUR
                TICKETS FOR</h1>
<h1 className="mo">MOVIES, EVENTS, SPORTS</h1>
          
            <p className="mov">
                Read movie reviews and much more
            </p>
        </div> */}
</>
    )
}
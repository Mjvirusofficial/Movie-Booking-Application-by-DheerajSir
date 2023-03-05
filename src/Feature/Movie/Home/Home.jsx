// import { Navbar } from "../../shared/NavBar/Navbar";
// import { Banner } from "../Banner/Banner";
// import { SearchPanel } from "../SearchPanel/SearchPanel";
// import { useEffect, useState } from 'react';
import { Banner } from '../Banner/Banner';
import Card from '../Card/Card';
import MovieData from '../MovieData/MovieData';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import './Home.css';
export function Home() {
    
    // const [movies, setMovies]=useState([]);

    // useEffect(()=>{
    //     fetch("https://www.omdbapi.com/?apikey=d272cc97&s=titanic")
    //         .then((res)=> res.json())
    //             .then(movies=>{
    //                 console.log(movies)
    //                 setMovies(movies);
    //             })
    // },[])


    return (
        <div>
            {/* <Navbar/> */}
            <div className='homeContainer'>
                <div className='banner'>
                    <Banner />
                </div>
                <SearchPanel />
                <h1 className=' m-3 text-start movies' style={{color:'white'}} >Movies</h1>

                 <div className="container mb-3">
                    <div className="row gy-3">
                    { 
                        MovieData.map(i =>{
                          return  <Card
                            img = {i.img}
                            title = {i.tittle}
                        />
                         })
                       }

                    </div>
                 </div>

            </div>

        </div>
    );
}
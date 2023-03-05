// import { Navbar } from "../../shared/NavBar/Navbar";
// import { Banner } from "../Banner/Banner";
// import { SearchPanel } from "../SearchPanel/SearchPanel";
import { useEffect, useState } from 'react';
import { Banner } from '../Banner/Banner';
import Card from '../Card/Card';
// import MovieData from '../MovieData/MovieData';
// import { SearchPanel } from '../SearchPanel/SearchPanel';
import '../SearchPanel/SearchPannel.css';
import './Home.css';
export function Home() {
    
    const [movies, setMovies]=useState([]);
    const [query, setQuery]=useState('joker');

        // function SearchForMovie(data){
        //     console.log(data)
        //     setQuery(data)
        // }

    useEffect(()=>{
        fetch("https://www.omdbapi.com/?apikey=d272cc97&s="+query)
            .then((res)=> res.json())
                .then(data=>{
                    if(data.Response === 'True'){
                    console.log(data.Search)
                    setMovies(data.Search);
                    } else{
                        console.log('Not connected')
                    }
                })
    },[query])


    return (
        <div>
            {/* <Navbar/> */}
            <div className='homeContainer'>
                <div className='banner'>
                    <Banner />
                </div>
                <div className='searchPanel'>
            <div>
                <p className='header1'>
                    WELCOME TO BOLETO
                    <div className="h2 text-start">WHAT ARE YOU LOOKING FOR</div>

                </p>

            </div>
             <div className='searchBox'>

                <div className="container">
                    <div className="row">
                        <div className="col text-start">
                            <div className='searchWrapper '>
                                <input onChange={(e) => setQuery(e.target.value)}   className=' searchInput'
                                    placeholder=" Search for Movies"
                                    type="text" />
                                <svg className={'searchIcon  bi bi-search'} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>


                            </div>
                        </div> 
                    </div>
                </div> 
            </div> 

        </div>
                <h1 className=' m-3 text-start movies' style={{color:'white'}} >Movies</h1>

                 <div className="container-fluid mb-3">
                    <div className="row gy-3">
                    { movies &&
                        movies.map(i =>{
                          return  <Card
                            img = {i.Poster}
                            title = {i.Title}
                        />
                         })
                       }

                    </div>
                 </div>

            </div>

        </div>
    );
}
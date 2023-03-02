// import { Navbar } from "../../shared/NavBar/Navbar";
// import { Banner } from "../Banner/Banner";
// import { SearchPanel } from "../SearchPanel/SearchPanel";
import { Banner } from '../Banner/Banner';
import Card from '../Card/Card';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import './Home.css';
export function Home() {
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
                        <Card
                             img = 'https://pixner.net/boleto/demo/assets/images/movie/movie01.jpg'
                  title = 'Alone'
                  desc = ''
                  visit = ''
                        />
                        <Card
                              img = 'https://pixner.net/boleto/demo/assets/images/movie/movie01.jpg'
                  title = 'Alone'
                  desc = ''
                  visit = ''
                        />
                        <Card
                              img = 'https://pixner.net/boleto/demo/assets/images/movie/movie01.jpg'
                  title = 'Alone'
                  desc = ''
                  visit = ''
                        />

                    </div>
                 </div>

            </div>

        </div>
    );
}
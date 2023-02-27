// import { Navbar } from "../../shared/NavBar/Navbar";
// import { Banner } from "../Banner/Banner";
// import { SearchPanel } from "../SearchPanel/SearchPanel";
import { Banner } from '../Banner/Banner';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import './Home.css';
export function Home(){
    return (
        <div>
        {/* <Navbar/> */}
        <div className='homeContainer'>
            <div className='banner'>
                <Banner />
            </div>
            <SearchPanel />
            {/* <div>
                Here comes the movie grid
            </div> */}
        </div>
        {/* <Banner/> */}
        </div>
    );
}
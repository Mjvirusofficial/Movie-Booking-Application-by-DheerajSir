



import styles from "./SearchPannel.css";

export function SearchPanel() {

    return (
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
                        <div className="col col-lg-2 text-start">
                            <div className='searchWrapper '>
                                <input className=' searchInput'
                                    placeholder=" Search for Movies"
                                    type="text" />
                                <svg className={styles.searchIcon + ' bi bi-search'} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>


                            </div>



                        </div>
                        <div className="col col-lg-3 ">
                            <div className="searchOption">
                                <img src="http://localhost:3000/static/media/pvr.014bc162408529518e97.png" alt="" />
                                <label htmlFor=""> City</label>
                                <select name="" id="">
                                    <option>Search...</option>
                                    <option>India</option>
                                    <option>London</option>
                                    <option>USA</option>

                                </select>
                            </div>
                        </div>

                        <div className="col col-lg-3 ">
                            <div className="searchOption">
                                <img src="http://localhost:3000/static/media/pvr.014bc162408529518e97.png" alt="" />
                                <label htmlFor=""> Date</label>
                                <select name="" id="">
                                    <option>Search...</option>
                                    <option>India</option>
                                    <option>London</option>
                                    <option>USA</option>

                                </select>
                            </div>
                        </div>

                        <div className="col col-lg-3 ">
                            <div className="searchOption">
                                <img src="http://localhost:3000/static/media/pvr.014bc162408529518e97.png" alt="" />
                                <label htmlFor=""> Movies</label>
                                <select name="" id="">
                                    <option>Search...</option>
                                    <option>India</option>
                                    <option>London</option>
                                    <option>USA</option>

                                </select>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
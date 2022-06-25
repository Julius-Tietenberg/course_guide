import React from 'react';
import "../styles/navbar.css";
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () =>{
    return(
        <div className="Navbar">

            <div className="left">
            <h1>Courses</h1>
            </div>

            <div className="middle">
            <input 
                type="text"
                id="searchBar"
                placeholder="search for courses" 
            />
                <button className="searchButton">
                <SearchIcon/>
                </button> 
                </div>
           
            <div className="right">
            <input 
                type="text"
                id="filterBar"
                placeholder="filter"   
            />

            <input 
                type="text"
                id="sortBar"
                placeholder="sort"   
            />
            </div>
             
           
         </div>
        
            
    );
}

export default Navbar;
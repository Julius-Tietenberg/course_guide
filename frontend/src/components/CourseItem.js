import React from 'react';
import { Link } from 'react-router-dom';


const CourseItem = ({image, name, prof}) =>{
    return(
        
        <a href="https://google.com" target="_blank">
 <div className="courseItem">
        <div style={{ backgroundImage: `url(${image})`}}>
        </div>
        <h1> {name} </h1>
        <p> {prof} </p>
       </div>
        </a>
      
            
    );
}

export default CourseItem;
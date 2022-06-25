import React from 'react';
import {CourseList} from "../components/CourseList";
import CourseItem from "../components/CourseItem";
import "../styles/courses.css";

const Courses = () =>{
    return(
        <div className="courses">
           <div className="courseList">
            {CourseList.map((courseItem, key) => {
            return <CourseItem
            key={key}
             image={courseItem.image} 
             name={courseItem.name} 
             prof={courseItem.prof}/>
           })}
           </div> 
        </div> 
        
    );
}

export default Courses;
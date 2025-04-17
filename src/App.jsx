import React, { useState } from 'react';

// Css
import './App.css';

// Components
import Course from './Course';

const getRandomCourse = () => {
    const courseArray = ["Angular", "Bootstrap", "CcSharp", "KompleWeb"];
    const randomIndex = Math.floor(Math.random() * courseArray.length);
    return courseArray[randomIndex];
}


// Render the App component
const App = () => {
    const [courses, setCourses] = useState([]);

    const handleClick = () => {
        setCourses(
            [...courses, getRandomCourse()]
        )
    };

    const courseList = courses.map((course, index) => {
        return <Course key={index} courseName={course} />

    });


    return (
        <>
            <div className='App'>
                <button onClick={handleClick}>Kurs Ekle</button>
                <div className='CourseList'>
                    {courseList}
                </div>
            </div>
        </>
    );
};


export default App;
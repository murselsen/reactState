import React from 'react';

// Images
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import CcSharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';

const courseMap = {
    Angular: Angular,
    Bootstrap: Bootstrap,
    CcSharp: CcSharp,
    KompleWeb: KompleWeb

}

const Course = ({ courseName }) => {
    // const courseImage = courseMap[courseName];
    return (
        <div className="course">

            <img src={courseMap[courseName]} alt={courseName} />


        </div>
    );
};

export default Course;
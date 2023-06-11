// import React from 'react';
// import Card from './Card';

// const Cards = ({ courses }) => {
//   const getCourses = () => {
//     let allCourses = [];
//     Object.values(courses).forEach((courseCategory) => {
//       courseCategory.forEach((course) => {
//         allCourses.push(course);
//       });
//     });
//     return allCourses;
//   };

//   return (
//     <div>
//       {getCourses().map((course) => (
//         <Card course={course} />
//       ))}
//     </div>
//   );
// };

// export default Cards;

import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
    const courses = props.courses
    const category = props.category
    const [likedCourses , setLikedCourses] = useState([]) 
  const getCourses = () => {
    if(category === "All" ) {
        let allCourses = [];
        if (courses) {
          Object.values(courses).forEach(array => {
            array.forEach(courseData => {
              allCourses.push(courseData);
            });
          });
        }
        return allCourses;
      }
      else {
        //specific catefort ka data array pass krunga
        return courses[category]
      }
    }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {getCourses().map((course) => (
        <Card course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
      ))}
    </div>
  );
};

export default Cards;


import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({course}) => {
  return (
      <div className="">
        {course.map(course =>
          <CourseListRow key={course.id} course={course}/>
        )}
      </div>

  );
} ;

CourseList.propTypes = {
  course: PropTypes.array.isRequired
};

export default CourseList;

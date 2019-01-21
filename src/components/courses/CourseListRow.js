import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import  '../../styles/contact.css';

const CourseListRow = ({course}) =>{
  return (
    <div className="list">
        <div className=" card cards-list col-lg-4 d-flex">
          <div className=""><b>Title:</b>
              <a href={course.watchHref} target="_blank">Watch</a>
          </div>
          <div className=""><b>Author:</b>
            <Link to={'/course/' + course.id}>{course.title}</Link>
          </div>
          <div className=""><b>Category:</b>
            {course.authorId}
          </div>
          <div className=""><b>Length:</b>
            {course.category}
          </div>
          <div className="card-body">{course.length}</div>
        </div>
      </div>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;

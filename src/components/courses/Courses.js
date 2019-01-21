import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from  'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class Courses extends  React.Component {
  constructor(props, context){
    super(props, context);
    this.redirectToAddCoursesPage = this.redirectToAddCoursesPage.bind(this);
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }
  redirectToAddCoursesPage(){
    browserHistory.push('/course');
  }
  render(){
    const {courses} =  this.props;
    return(
      <div>
        <h1 id="courses-page">Courses and Trailers</h1>
        <input type="submit"
               value="Add Item"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursesPage}/>
          <CourseList course={courses}/>
      </div>
    );
  }
}
Courses.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function  mapStateToProps(state, ownProps) {
  return{
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
      actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Courses);

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactPage from "./components/contact/ContactPage";
import Courses from "./components/courses/Courses";
import ManageCoursePage from "./components/courses/ManageCoursePage";

export default  (
  <Route path="/" component={App}>
    <div>
        <h1>Testing</h1>
        {/* You can render <Route> and <NavTabs /> here */}
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="courses" component={Courses}/>
        <Route path="course" component={ManageCoursePage}/>
        <Route path="course/:id" component={ManageCoursePage}/>
        <Route path="contact" component={ContactPage}/>

    </div>


  </Route>
);


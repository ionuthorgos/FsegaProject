import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomeContent from './components/home/HomeContent';
import AboutPage from './components/about/AboutPage';
import ContactPage from "./components/contact/ContactPage";
import Courses from "./components/courses/Courses";
import ManageCoursePage from "./components/courses/ManageCoursePage";
import LoginComponent from "./components/login/Login";
import RegisterPage from "./components/register/RegisterPage";
import UserCreateContainer from "./components/user/create/user-create.container";

export default  (
  <Route path="/" component={App}>
    <div>
        <h1>Testing</h1>

        <IndexRoute component={HomeContent}/>
        <Route path="about" component={AboutPage}/>
        <Route path="courses" component={Courses}/>
        <Route path="course" component={ManageCoursePage}/>
        <Route path="course/:id" component={ManageCoursePage}/>
        <Route path="contact" component={ContactPage}/>
        <Route path="login" component={LoginComponent}/>
        <Route path="register" component={RegisterPage}/>
        <Route path="create" component={UserCreateContainer}/>

    </div>


  </Route>
);


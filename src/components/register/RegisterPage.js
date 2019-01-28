import React from 'react';
import {Link} from 'react-router';
import '../../styles/registerPage.css';

class RegisterPage extends  React.Component {
  render(){
    return(
      <div className="col-md-6 col-md-offset-3 formClass">
        <h2>Register</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={'form-group'}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" name="firstName"  />

            <div className="help-block">First Name is required</div>

          </div>
          <div className={'form-group' }>
            <label id="name" htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" name="lastName" />
            <div className="help-block">Last Name is required</div>

          </div>
          <div className={'form-group'}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" />
            <div className="help-block">Username is required</div>

          </div>
          <div className={'form-group'}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password"/>
            <div className="help-block">Password is required</div>

          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            {/*<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />*/}

            <Link to="/login" className="btn btn-link">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;

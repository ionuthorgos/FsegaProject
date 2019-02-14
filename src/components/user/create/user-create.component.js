import React from 'react';
import {
	FormGroup,
	FormControl,
	ControlLabel
  } from "react-bootstrap";


export default class UserCreate extends React.Component {

	constructor(props) {
		super(props);
		debugger;
			//this.state.userEdit = props.editName

		this.state = {
			name:"",
			password:"",
			email:""
		};
		this.editName = this.editName.bind(this);
		this.editPassword = this.editPassword.bind(this);
		this.editEmail = this.editEmail.bind(this);
		
		this.createUser = this.createUser.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	/*onNavigateHome = () => {
		window.history.back();
	};*/
		userEdit () {
			this.props.userEdit(this.state.userEdit);
		}

    editName(e) {
        // debugger;
        this.setState({name: e.target.value});
    }

    editPassword(e) {
        // debugger;
        
        this.setState({password:e.target.value});
    }

 editEmail(e) {
        // debugger;
        
        this.setState({email:e.target.value});
    }
		createUser() {
			this.props.createUser(this.state);
		}

    onSubmit(){
      return false;
    }


		render() {
			const {name, email, password} = this.state;
			return (
				<div className="App col-md-6 col-md-offset-3">
<br /><br /><br /><br /><br />					
					<form style={{float: 'none', margin: '0 auto'}} onSubmit={this.handleSubmit}>
		<FormGroup controlId="name" bsSize="large">
          <ControlLabel style={{color: "white"}}>Name</ControlLabel>
          <FormControl
            autoFocus
            type="name"
			value={name}
			onChange={this.editName}
          />
        </FormGroup>
	    <FormGroup controlId="email" bsSize="large">
          <ControlLabel style={{color: "white"}}>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
			value={email}
			onChange={this.editEmail}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel style={{color: "white"}} >Password</ControlLabel>
          <FormControl
            value={password}
			onChange={this.editPassword}
            type="password"
          />
        </FormGroup>
		
		<input type="submit" value="Create user" onClick={this.createUser} />
		
       
      </form>
				</div>
			);
		}
}

//conceptul de flux

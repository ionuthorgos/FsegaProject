import React from 'react';
/*	//import UserItem from './logIn/userItem';	*/
/*	//import { Redirect } from 'react-router-dom';	*/
/*	import { push } from 'react-router-redux';	*/

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
	}

	onNavigateHome = () => {
		window.history.back();
	};
		userEdit = () => {
			this.props.userEdit(this.state.userEdit);
		};

    editName(e) {
        // debugger;
        this.setState({name: e.target.value})
    }

    editPassword(e) {
        // debugger;
        
        this.setState({password:e.target.value})
    }

 editEmail(e) {
        // debugger;
        
        this.setState({email:e.target.value})
    }
		createUser() {
			this.props.createUser(this.state);
		};

		render() {
			const {name, email, password} = this.state;
			return (
				<div className="App">

					<form onSubmit={this.onSubmit}>
						<input type="text" value={name} onChange={this.editName} />
						<input type="text" value={email} onChange={this.editEmail} />
						<input type="text" value={password} onChange={this.editPassword} />
						<input type="submit" value="Creaza user" onClick={this.createUser} />
					</form>
						<button type="submit" onClick={this.onNavigateHome}>Back</button>
				</div>


			);
		}
}


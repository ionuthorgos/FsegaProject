import React from 'react';
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

    onSubmit(){
      return false;
    }


		render() {
			const {name, email, password} = this.state;
			return (
				<div className="App">

					<form onSubmit={this.onSubmit}>
						<input type="text" placeholder="name" value={name} onChange={this.editName} /><br />
						<input type="email" placeholder="email" value={email} onChange={this.editEmail} /><br />
						<input type="password" placeholder="password" value={password} onChange={this.editPassword} /><br />
						<input type="submit" value="Create user" onClick={this.createUser} />
					</form>

				</div>
			);
		}
}

//conceptul de flux

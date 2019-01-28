import React from 'react';
/*	//import UserItem from './logIn/userItem';	*/
/*	//import { Redirect } from 'react-router-dom';	*/
/*	import { push } from 'react-router-redux';	*/

export default class UserEdit extends React.Component {
	constructor(props) {
		super(props);
			//this.state.userEdit = props.editName

			this.state ={};
		if (this.props.match) {
			const {userId} = this.props.match.params;
			const userForEdit = props.usersStore.users.find(el => el._id === userId);

			this.state.userEdit =  userForEdit;
		}
		this.editEmail = this.editEmail.bind(this);
		this.saveUser = this.saveUser.bind(this);
	}

	onNavigateHome = () => {
		window.history.back();
	};
		userEdit = () => {
			this.props.userEdit(this.state.userEdit);
		};
    editEmail(e) {
        debugger;
        var userEdit = {...this.state.userEdit}
        userEdit.email = e.target.value;
        this.setState({userEdit})
    }
		saveUser() {
			this.props.saveUser(this.state.userEdit);
		};
		render() {
			debugger;
			return (
				<div className="App">

					<form onSubmit={this.onSubmit}>
					{this.state.userEdit && 
						<div>
						<input type="text" value={this.state.userEdit.email} onChange={this.editEmail} />
						<input type="submit" value="Update" onClick={this.saveUser} />
						</div>
					}
					</form>
						<button type="submit" onClick={this.onNavigateHome}>Back</button>
				</div>


			);
		}
}


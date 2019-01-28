import React from 'react';
import PropTypes from 'prop-types';
import UserActions from '../actions/user.actions';
import UserItem from '../user-item/user';

class UserList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Users: this.props.users,
		};
		this.getUsers = this.getUsers.bind(this);
		this.setUsers = this.setUsers.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		this.setState({
			...this.state,
			users: nextProps.users
		});
	}

    state = {count: 0};

    setUsers(x) {
    	this.setState({
    			...this.state,
    			users: [{id:1, text:'def'}]
    		});
    }

   getUsers = () => {
   	this.props.getUsersFromContainer();
   };

    getUsersPromise = () => {
    	this.userActions.getTestUsers();
    	UserActions.getUsersPromise()
    		.then((response) => {
    			console.log(response);
    			const data = response.data;
    			data.push({id:1, text :'John'});
    			this.setState({
    				...this.state,
    				users: data
    			});
    		})
    		.catch((err) => {
    			console.log('Eroare');
    		});
    };

    createItem = item => <li key={item.id}>{item.name}</li>;
    render() {
    	const users = this.props.userlist;
        debugger;
    	return (
    		<div>
    			<h2>Users</h2>
    			<div>
    				<button onClick={this.props.getUsersFromContainer}>get Users</button>
    			</div>
    			{users &&
                <ul>
                	{
                		users.map((item, index) => (
                			<UserItem
                  key={index}
                  id={item._id}
                				email={item.email}
                			/>
                		))
                	}
                </ul>
    			}
    		</div>
    	);
    }
}


export default UserList;

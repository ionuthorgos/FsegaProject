import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/es/Link';
//import { bootstrap, interfaces } from "redux-bootstrap";
import {
    ListGroup,
    ListGroupItem,
} from 'react-bootstrap';

// import 'item-colors.scss';

import '../../logIn/user-styles.css';

class UserItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: props
		};
	}
    createItem = (item) => {
        
    };

    render() {
    	const { user } = this.state;
        debugger;
    	return (

    		<div className='user-item'>
				Email: <b>{user.email} </b>

                <Link style={{textDecoration: 'none'}}
					class={'user-edit'}
					to={`/users/${user.id}`} > Edit</Link>

    		</div>
    	);
    }
}



export default UserItem;

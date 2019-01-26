import React from 'react';
import Link from 'react-router-dom/es/Link';


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
        return (

            <div className='user-item'>

                First Name: <b>{user.userName.first} </b>
                Last Name: <b>{user.userName.last}</b>

                <Link style={{textDecoration: 'none'}}
                      class={'user-edit'}
                      to={`/users/${user.id}`} > Edit</Link>

            </div>
        );
    }
}



export default UserItem;

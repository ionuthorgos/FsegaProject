import { connect } from 'react-redux';
import UserActions from '../actions/user.actions';
import UserCreate from './user-create.component';

const mapStateToProps = store => ({
	usersStore: store.userReducer
});

const mapDispatchToProps = dispatch => ({
	getUsersFromContainer : () => dispatch(UserActions.getUsers()),
	createUser : (data) => dispatch(UserActions.createUser(data)),
	update : () => dispatch(UserActions.update())
});

const UserCreateContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UserCreate);

export default UserCreateContainer;

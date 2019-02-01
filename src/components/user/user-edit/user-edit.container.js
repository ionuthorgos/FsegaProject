import { connect } from 'react-redux';
import UserActions from '../../../actions/user.actions';
import UserEdit from './user-edit.component';

const mapStateToProps = store => ({
	usersStore: store.userReducer
});

const mapDispatchToProps = dispatch => ({
	getUsersFromContainer : () => dispatch(UserActions.getUsers()),
	saveUser : () => dispatch(UserActions.getUsers()),
	update : () => dispatch(UserActions.update())
});

const UserEditContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UserEdit);

export default UserEditContainer;

import axios from 'axios';

export class UserActions {
	constructor() {
	}
    userLoogedIn = userData => (dispatch) => {
    	const storeData = {
    		type: 'USER_LOGGED_IN',
    		data: userData
    	};
    	dispatch(storeData);
    }
    userLogedOut = () => (dispatch) => {
    	const storeData = {
    		type: 'USER_LOGGED_OUT',
    	};
    	dispatch(storeData);
    }
		editName = (e) => (dispatch) => {
			const storeData = {
					type: ' SET_FILTER'
			}
			dispatch(storeData);
		}
		update = user => (dispatch) => {
			const storeData = {
			type:'USER_UPDATED',
		};
		dispatch(storeData);
	}

		getTestUsers() {
			return [{a:1}];
		}
    getUsers = () => async (dispatch, getState) => {
    	axios.post('http://localhost:6002/api/pub/security/getUsers')
    		.then((response) => {
                debugger;
    			console.log(response);
    			const {items} = response.data.data;
    			dispatch({type:'USERS_RECEIVED', data: items});
    		})
    		.catch((err) => {
    			console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
    			const resp = {
    				data:[{id:1, text :'John'}]
    			};
    			dispatch({type:'USERS_RECEIVED', data: resp.data});
    			// dispatch({type:"GET_USERS_ERROR", action: err});
    		});
    };

    createUser = (data) => async (dispatch, getState) => {
        var db = {
            login:data.name,
            email: data.email,
            password: data.password
        }
        axios.post('http://localhost:6002/api/pub/security/createUser', data)
            .then((response) => {
                console.log(response);
                const {results} = response.data;
                dispatch({type:'USERS_RECEIVED', data: results});
            })
            .catch((err) => {
                console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
                const resp = {
                    data:[{id:1, text :'John'}]
                };
                dispatch({type:'USERS_RECEIVED', data: resp.data});
                // dispatch({type:"GET_USERS_ERROR", action: err});
            });
    };

    

    getUsersPromise = () => axios.get("http://rest.learncode.academy/api/wstern/users");
}

export default new UserActions();

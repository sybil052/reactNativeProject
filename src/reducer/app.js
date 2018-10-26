import Immutable from 'immutable';
// import * as ActionTypes from '../constants/actionType';

const initState = Immutable.fromJS({
	// user: {},
});
export default (state = initState, action) => {
	let newState = state;
	switch (action.type) {
		default:
			return newState;
	}
};
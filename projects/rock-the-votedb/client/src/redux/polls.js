// import axios from 'axios';

// const pollUrl = '/polls';
// const pollsReducer = (state = { data: [], loading: true }, action) => {
//     switch (action.type) {
//         case "GET_POLLS":
//             return {
//                 data: action.issues,
//                 loading: false
//             };
//         case "ADD_POLLS":
//             return {
//                 ...state,
//                 data: [...state.data, action.newPoll]
//             };
//         case "EDIT_POLL":
//             let newData = state.data;
//             for (let i = 0; i < newData.length; i++) {
//                 if (action.updatedPoll._id === newData[i]._id) {
//                     newData[i] = Object.assign(newData[i], action.updatedPoll);
//                 }
//             }
//             return {
//                 ...state,
//                 data: newData
//             }
//         default:
//             return state;
//     }
// }

// export function getPolls() {
//     return function(dispatch) {
//         axios.get(pollUrl)
//         .then(response => {
//             dispatch({
//                 type: 'GET_POLLS',
//                 polls: response.data
//             })
//         })
//         .catch(err => {
//             console.error(err);
//         })
//     }
// }

// export function updatedPoll(updatedPoll){
//     return function(dispatch){
//         axios.put(pollUrl + '/' + updatedPoll._id, updatedPoll)
//         .then(response => {
//             dispatch({
//                 type: 'EDIT_POLL',
//                 updatedPoll: response.data
//             })
//         })
//         .catch(err => {
//             console.error(err);
//         })
//     }
// }

// export default pollsReducer;
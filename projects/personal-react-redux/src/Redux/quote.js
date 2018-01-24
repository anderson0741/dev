import axios from 'axios';

const quoteReducer = (quote = {}, action) => {
    switch (action.type) {
        case 'GET_QUOTE':
            return action.quote
        default:
            return quote
    }
}

export function getQuote() {
    return function (dispatch) {
        axios.get(`http://ron-swanson-quotes.herokuapp.com/v2/quotes`)
            .then(response => {
                dispatch({
                    type: 'GET_QUOTE',
                    quote: response.data
                })
            })
            .catch(err => {
                console.error(err);

            })
    }
}

export default quoteReducer;
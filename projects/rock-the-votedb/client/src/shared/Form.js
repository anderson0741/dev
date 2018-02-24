// import React, { Component } from 'react';
// import axios from 'axios';
// import DisplayPoll from './DisplayPoll';
// import Poll from './Poll';
// import './Form.css';

// const pollUrl = '/polls/';

// export default class Form extends Component {
//     constructor(props) {
//         super(props);
//         let { title, description } = props;
//         this.state = {
//             inputs: {
//                 "title": title || '',
//                 "description": description || ''
//             },
//             polls: [],
//             loading: true
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.pollDelete = this.pollDelete.bind(this);
//         this.handleEdit = this.handleEdit.bind(this);
//         this.clearInputs = this.clearInputs.bind(this);
//     }

//     handleChange = (e) => {
//         let { title, description, name, value } = e.target;
//         this.setState(prevState => {
//             return {
//                 inputs: {
//                     ...prevState.inputs,
//                     [name]: value
//                 }
//             }
//         });
//         //console.log(this.state.inputs);
//     }

//     handleSubmit(e) {
//         let poll = this.state.inputs
//         e.preventDefault();
//         axios.post(pollUrl, poll)
//             .then(response => {
//                 console.log('response', response);
//                 this.setState((prevState) => {
//                     return {
//                         polls: [response.data, ...prevState.polls],
//                         loading: false
//                     }
//                 })
//             })
//             .catch(err => {
//                 console.error(err);
//             })
//         this.clearInputs();
//     }

//     pollDelete(id) {
//         let { polls } = this.state;
//         axios.delete('/poll/' + id)
//             .then(response => {
//                 this.setState({
//                     polls: polls.filter((poll, index) => {
//                         return poll._id !== id
//                     }),
//                     loading: false
//                 });
//             })
//             .catch(err => {
//                 console.error(err);
//             })
//     }

//     handleEdit(id, updatePoll) {
//         axios.get(pollUrl + '/' + id, updatePoll)
//             .then(response => {
//                 let newPoll = response.data;
//                 this.setState(prevState => {
//                     return {
//                         polls: prevState.polls.map(poll => {
//                             if (poll._id === id) {
//                                 return newPoll;
//                             } else {
//                                 return poll;
//                             }
//                         })
//                     }
//                 })
//             })
//     }

//     componentDidMount() {
//         axios.get(pollUrl)
//             .then(response => {
//                 this.setState({
//                     polls: response.data,
//                     loading: false
//                 })
//             })
//             .catch(err => {
//                 console.error(err);
//             })
//     }

//     clearInputs() {
//         this.setState({
//             inputs: {
//                 "title": '',
//                 "description": ''
//             }
//         })
//     }

//     render() {
//         let { title, description } = this.state.inputs;
//         let { polls, loading } = this.state;
//         // console.log(polls);
//         // console.log(title, description);
//         return (
//             <div className='votes'>
//                 <form onSubmit={this.handleSubmit}>
//                     <h1 className="theTitle">Rock The VOTE!</h1>
//                     <input className="title" onChange={this.handleChange} name="title" value={title} placeholder="Title" type="text" />
//                     <input className="description" onChange={this.handleChange} name="description" value={description} placeholder="Description" type="text" />
//                     <input type="submit" className="submit" value="Submit" />
//                 </form>
//                 <br />
//                 <DisplayPoll pollDelete={this.pollDelete} handleEdit={this.handleEdit} polls={polls} loading={loading} />
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'

import './Form.css'; 

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                title: '',
                description: ''
            }
        }
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }
    clearInputs = () => {
        this.setState({
            inputs: {
                title: '',
                description: ''
            }
        })
    }

    handleSubmit = (e) => {
        let {add, id} = this.props;
        e.preventDefault();
        this.clearInputs();
        if (add) {
            this.props.submit(this.state.inputs);            
        }
        else {
            this.props.submit(this.state.inputs, id);
            this.props.options.toggleDisplay();
        }
    }

    render() {
        let {title, description} = this.state.inputs;
        return (
            <div>
               <form className='votes'>
                   <h1>ROCK THE VOTE DB!!</h1>
                   <input onChange={this.handleChange} className='title-input' type="text" placeholder='Title' value={title} name='title'/>
                   <input onChange={this.handleChange} className='description-input'type="text" placeholder='Description' value={description} name='description' />
                   <button className='submit' type='submit' onClick={this.handleSubmit}>Submit</button>
                </form> 
            </div>
        )
    }
}
import React, { Component } from 'react';
import axios from 'axios';

const cloudUrl = 'https://api.cloudinary.com/v1_1/anderson0741/'

export default class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            car: {},
            loading: true
        }
        this.getCarObj = this.getCarObj.bind(this);
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        this.getCarObj(id);
    }

    componentWillReceiveProps(nextProps) {
        let { id } = this.props.match.params;
        let nextId = nextProps.match.params.id;
        if (nextId !== id) {
            this.getCarObj(nextId);
        }
    }

    getCarObj(id) {
        axios.get(cloudUrl + id)
            .then(response => {
                this.setState({
                    car: response.data,
                    loading: false
                });
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    loading: false
                })

            })
    }
    render() {
        let {} = this.state.car;
        let { loading } = this.state;
        return (

            loading ?
                <div>Loading...</div>
                :
                <div>
                    <h1>{}</h1>
                </div>
        )
    }
}

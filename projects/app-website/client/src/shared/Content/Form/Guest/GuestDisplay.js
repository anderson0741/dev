import React, { Component } from 'react';
import axios from 'axios';
import Form from '../Form';
import GuestListing from './GuestListing';

const listingUrl = '/listing/';

export default class GuestDisplay extends Component {
    render() {
        let { listings, loading } = this.props;
        return (
            loading ?
                <div>
                    loading
                </div>
                :
                <div>
                    {listings.map((listing, index) => {
                        return <GuestListing key={listing._id} {...listing} />
                    })}
                </div>
        )
    }
}
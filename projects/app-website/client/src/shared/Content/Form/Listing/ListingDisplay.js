import React, { Component } from 'react';
import axios from 'axios';
import Form from '../Form';
import Listing from './Listing';

const listingUrl = '/listing/';

export default class ListingDisplay extends Component {
    render() {
        let { listings, loading, listingDelete, listingChange } = this.props;
        return (
            loading ?
                <div>
                    loading
                </div>
                :
                <div>
                    {listings.map((listing, index) => {
                        return <Listing listingChange={listingChange} listingDelete={listingDelete} key={listing._id} {...listing} />
                    })}
                </div>
        )
    }
}
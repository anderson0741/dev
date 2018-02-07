import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';
import Listing from './Listing';

const listingUrl = '/listing/';

export default class ListingDisplay extends Component {
    render() {
        let { listings, loading, listingDelete } = this.props;
        return (
            loading ?
                <div>
                    loading
            </div>
                :
                <div>
                    {listings.map((listing, index) => {
                        return <Listing listingDelete={listingDelete} key={index + listing.name} {...listing} />
                    })}
                </div>
        )
    }
}

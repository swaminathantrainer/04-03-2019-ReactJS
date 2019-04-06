import React, { Component } from 'react';

export default class DetailsPageComponent extends Component {

    render() {
        const { itemId } = this.props.match.params;
        return <h1>{`You are seeing ${itemId}`}</h1>
    }
}
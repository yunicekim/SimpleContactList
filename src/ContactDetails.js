import React, { Component } from 'react';

export default class ContactDetails extends Component{
    render() {
        return(
            <div>
                <p>{this.props.contact.name} </p>
                <p>{this.props.contact.phone}</p>
            </div>
        )
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    }
}
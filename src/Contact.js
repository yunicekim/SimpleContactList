import React, { Component } from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';

export default class Contact extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedKey: -1,
            keyword : '',
            contactData: [
                {name: 'aaa', phone: '111-111-1111'},
                {name: 'bbb', phone: '111-111-1112'},
                {name: 'ccc', phone: '111-111-1113'},
                {name: 'ddd', phone: '111-111-1114'},
                {name: 'eee', phone: '111-111-1115'},
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        })
    }

    handleClick(key) {
        this.setState({
            selectedKey: key
        })
        console.log(key, ' is selected');
    }

    render() {
        const mapToComponents = (data) => {
            data = data.filter(
                (contact) => {
                    return contact.name.toUpperCase()
                        .indexOf(this.state.keyword) > -1;
                }
            )

            return data.map( (contact, i) => {
                return(
                    <ContactInfo 
                        contact = {contact}
                        key = {i}
                        onClick = { () => this.handleClick(i) }
                    />
                )
            })
        }

        return(
            <div>
                <h1>Contacts</h1>
                <input 
                    name="keyword"
                    placeholder="Search"
                    value = {this.state.keyword}
                    onChange = {this.handleChange}
                />
                {mapToComponents(this.state.contactData)}   
                <ContactDetails 
                    contact = {this.state.contactData[this.state.selectedKey]}
                />             
            </div>

        )
    }
}
import React, { Component } from 'react';

class PersonCard extends Component{
    render(){
        return (
            <>
            <h1>{this.props.name}</h1>
            <p>Age: {this.props.age}</p>
            <p>Hair color: {this.props.hair}</p>
            </>
        );
    }
}

export default PersonCard;
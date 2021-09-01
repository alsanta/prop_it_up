import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    render(){
        const addAge = ()=>{
            this.setState({age: this.state.age+1})
        }
        return (
            <>
            <h1>{this.props.name}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair color: {this.props.hair}</p>
            <button onClick={addAge} >Happy Birthday!</button>
            </>
        );
    }
}

export default PersonCard;
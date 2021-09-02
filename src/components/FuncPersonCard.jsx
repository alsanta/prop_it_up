import React from 'react';

const FuncPersonCard = (props) => {
    return (
        <>
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair color: {props.hair}</p>
        </div>
        </>
    );
}

export default FuncPersonCard;
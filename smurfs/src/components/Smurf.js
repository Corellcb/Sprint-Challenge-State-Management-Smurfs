import React from 'react';
import styled from 'styled-components';

const SmurfDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px;
    padding: 2%;
    margin: 2% auto;
    width: 40%;
    background-color: #62cdfd;
    color: white;
`

const Smurf = props => {
    return (
        <SmurfDiv>
            <p>Name: {props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </SmurfDiv>
    );
};

export default Smurf;
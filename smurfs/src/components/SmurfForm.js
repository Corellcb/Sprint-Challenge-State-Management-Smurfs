import React, { useState } from 'react';
import { fetchSmurfs } from '../actions';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Axios from 'axios';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 50%;
`

const SmurfForm = props => {
    const [input, setInput] = useState({
        name: '',
        age: '',
        height: ''
    })

    const onChange = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        console.log(input);
    };

    const onSubmit = event => {
        event.preventDefault();
        console.log(event);
        Axios
            .post('http://localhost:3333/smurfs', input)
            .then(res => {
                console.log(res);
                props.fetchSmurfs()
                setInput({
                    name: '',
                    age: '',
                    height: ''
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            {!(props.smurfs.length > 0) && !props.isLoading && (<button onClick={props.fetchSmurfs} >Get Smurfs</button>)}
            {props.isLoading && (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            )}
            {(props.smurfs.length > 0) && (
            <StyledForm onSubmit={onSubmit} >
                <h2>Missing a Smurf?</h2>
                <p>Add one!</p>
                <div>
                    <div>
                        <input name='name' placeholder='Enter Name' value={input.name} onChange={onChange} type='text' required />
                    </div>
                    <div>
                        <input name='age' placeholder='Enter Age' value={input.age} onChange={onChange} type='number' required />
                    </div>
                    <div>
                            <input name='height' placeholder='Enter Height' value={input.height} onChange={onChange} type='text' required />
                    </div>
                    <input type='submit' />
                </div>
            </StyledForm>)}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.SmurfReducer.isLoading,
        smurfs: state.SmurfReducer.smurfs
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfForm)
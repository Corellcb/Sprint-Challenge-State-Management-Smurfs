import React, { useState } from 'react';
import { fetchSmurfs } from '../actions';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Axios from 'axios';

const SmurfForm = props => {
    const [input, setInput] = useState({
        name: '',
        age: undefined,
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
        setInput({
            ...input,
            id: Date.now()
        });
        Axios
            .post('http://localhost:3333/smurfs', input)
            .then(res => {
                console.log(res);
                
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            {(props.meme === undefined) && !props.isLoading && (<button onClick={props.fetchSmurfs} >Get more smurfs</button>)}
            {props.isLoading && (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            )}
            <form onSubmit={onSubmit} >
                <h2>Missing a Smurf?</h2>
                <div>
                    <label>Name:</label>
                    <input name='name' placeholder='Enter Name' value={input.name} onChange={onChange} type='text' />
                </div>
                <div>
                    <label>Age:</label>
                    <input name='age' placeholder='Enter Age' value={input.age} onChange={onChange} type='number' />
                </div>
                <div>
                    <label>Height(in cm):</label>
                    <input name='height' placeholder='Enter Height' value={input.height} onChange={onChange} type='number' />
                </div>
                <input type='submit' />
            </form>
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
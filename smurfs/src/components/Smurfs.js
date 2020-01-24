import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

const Smurfs = props => {
    return (
        <div>
            {props.smurfs.map(el => (
                <Smurf smurf={el} key={el.id} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.SmurfReducer.isLoading,
        smurfs: state.SmurfReducer.smurfs
    }
}

export default connect(mapStateToProps, {})(Smurfs);
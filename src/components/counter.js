import React from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div className="container">
      <div className="count-container">
      <h1 id="counter">{counter}</h1>
      </div>
      <div className="btn-container">
        <button onClick={dec} className="btn btn-primary"><img src="minus.svg" alt="minus"/>DEC</button>
        <button onClick={inc} className="btn btn-primary"><img src="plus.svg" alt="plus"/>INC</button>
        <button onClick={rnd} className="btn btn-primary"><img src="reset.svg" alt="reset"/>RND</button>
      </div>
    </div>
  )
}

const mapStateProps = (state) => {
  return {
    counter: state
  }
}


export default connect(mapStateProps, actions)(Counter);
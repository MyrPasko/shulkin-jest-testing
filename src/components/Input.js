import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  state = {};

  render() {
    return (
      <div>
        <button>Some button</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);

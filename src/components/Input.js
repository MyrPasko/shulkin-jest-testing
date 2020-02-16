import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  state = {};

  render() {
    const { success } = this.props;

    const contents = success ?
      null :
      (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            id="word-guess"
            type="text"
            placeholder="enter guess" />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            type="submit"
          >Submit
          </button>
        </form>
      );

    return (
      <div data-test="component-input">
        {contents}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success } = state;

  return { success };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';
import * as actions from '../actions/wordsActions';



class Root extends Component {
  componentDidMount() {
    this.props.initState();
  }
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  initState: PropTypes.func
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    initState: ()=>actions.initState()(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);

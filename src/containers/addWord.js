import AddWordForm from '../components/addWordForm';
import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/wordsActions';
import { push } from 'react-router-redux';


const AddWord = ({ addWord, goToRoute }) => {
  const submit = (values) => {
    // Do something with the form values
    addWord({ header: values.word, meta: values.meaning, description: values.sentence });
    goToRoute(push('/'));
  }
  return (
    <AddWordForm onSubmit={submit} />
  );
}

function mapStateToProps(state) {
  return {
    wordsArray: state.wordsArray
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goToRoute: (path) => dispatch(path),
    addWord: bindActionCreators(actions.addWord, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWord);

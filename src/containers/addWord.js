import AddWordForm from '../components/addWordForm';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/wordsActions';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';



const AddWord = ({ addWord, goToRoute, storeWords }) => {
  const submit = (values) => {
    // Do something with the form values
    if (values.commaSeperatedWords) {
      storeWords(values.commaSeperatedWords.split(',').map(word => word.trim()));
    } else
      addWord({ word: values.word, meaning: values.meaning, example: values.sentence });
    goToRoute(push('/'));
  };
  return (
    <AddWordForm onSubmit={submit} />
  );
};

AddWord.propTypes = {
  addWord: PropTypes.func,
  goToRoute: PropTypes.func,
  storeWords: PropTypes.func
};

function mapStateToProps(state) {
  return {
    wordsArray: state.wordsArray
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goToRoute: (path) => dispatch(path),
    addWord: (wordObj) => actions.addWord(wordObj)(dispatch),
    storeWords: (wordsArray) => dispatch({ type: 'STORE_MULTIPLE_WORDS', wordsArray })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWord);

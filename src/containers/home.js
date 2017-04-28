import React from 'react';
import { Card, Segment, Icon, Image, Search, Popup } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/wordsActions';
import PropTypes from 'prop-types';
import '../styles/styles.scss';
import Tooltip from 'rc-tooltip';


const searchGoogle = (word) => {
  window.open('http://www.google.com/search?q=' + word, '_blank');
}

const CardsMaker = ({ deleteWord, wordsArray }) =>
  <Card.Group itemsPerRow={4}>
    {wordsArray.map((element,id) =>
      <Card key={id} className="animated fadeIn">
        <Card.Content>
          <Image floated="right">
            <Popup
              trigger={<Icon  link name="google" onClick={()=>searchGoogle(element.word)} />}
              content="Search this word on Google"
            />
            <Popup
              trigger={<Icon link name="close"   onClick={()=>deleteWord(element._id)} />}
              content="Delete Flashcard from your saved collection"
            />
          </Image>
          <Card.Header>
            {element.word}
          </Card.Header>
          <Card.Meta>
            {element.meaning}
          </Card.Meta>
          <Card.Description>
            {element.example}
          </Card.Description>
        </Card.Content>
      </Card>)}
  </Card.Group>

CardsMaker.propTypes = {
  deleteWord: PropTypes.func,
  wordsArray: PropTypes.array
}


const HomePage = ({ searchString, deleteWord, wordsArray, filterWords }) => {
  let handleSearchChange = (e, value) => {
    filterWords(value);
  }
  return (
    <div className="main-container">
      <Search
        onSearchChange={handleSearchChange}
        open={false}
        icon="filter"
        placeholder="Search your words.."
        value={searchString}
      />
      <Segment basic>
        <CardsMaker deleteWord={deleteWord} wordsArray={wordsArray} searchString={searchString} filter = {filterWords}/>
      </Segment>
    </div>
  )
}

HomePage.propTypes = {
  searchString: PropTypes.string,
  deleteWord: PropTypes.func,
  wordsArray: PropTypes.array,
  filterWords: PropTypes.func
}

function mapStateToProps(state) {
  return {
    wordsArray: state.wordsState.filteredArray,
    searchString: state.wordsState.searchString
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteWord: (id)=>actions.deleteWord(id)(dispatch),
    filterWords: bindActionCreators(actions.filterWords, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

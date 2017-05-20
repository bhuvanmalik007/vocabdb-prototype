import React from 'react';
import { Card, Segment, Icon, Image, Search, Popup, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as actions from '../actions/wordsActions';
import PropTypes from 'prop-types';
import '../styles/styles.scss';



const searchGoogle = (word) => {
  window.open('http://www.google.com/search?q=' + word, '_blank');
}

// const indexFinder = (index)=>{
//
// }

const CardsMaker = ({ deleteWord, wordsArray, multipleSelect, pushSelectedId, selectedIds }) =>
  <Card.Group itemsPerRow={4}>
    {wordsArray.map((element,index) =>
      <Card key={index} className="animated fadeIn" link={multipleSelect} >
        <Card.Content onClick={()=>{multipleSelect && pushSelectedId(element._id);}}>
          <Image floated="right">
            {!multipleSelect && <div>
              <Popup
                trigger={<Icon  link name="google" onClick={()=>searchGoogle(element.word)} />}
                content="Search this word on Google"/>
              <Popup
                trigger={<Icon link name="close" onClick={()=>deleteWord(element._id)} />}
                content="Delete Flashcard from your saved collection"/>
            </div>}
            {selectedIds.find(id=>id==element._id) && <Icon link name="checkmark" />}
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
  wordsArray: PropTypes.array,
  multipleSelect: PropTypes.bool,
  pushSelectedId: PropTypes.func,
  selectedIds: PropTypes.array
}


const HomePage = ({
  searchString,
  deleteWord,
  wordsArray,
  filterWords,
  isLoading,
  multipleSelect,
  toggleMultipleSelect,
  pushSelectedId,
  selectedIds
}) => {
  let handleSearchChange = (e, value) => {
    filterWords(value);
  }
  return (
    <div className="main-container">
      <Button toggle active={multipleSelect} onClick={toggleMultipleSelect}>
        Select Multiple
      </Button>
      <Search
        size="big"
        onSearchChange={handleSearchChange}
        open={false}
        icon="filter"
        placeholder="Search your words.."
        value={searchString}
        className="animated fadeIn"
      />
      {isLoading && <Icon loading size="huge" name="rocket" />}
      <Segment basic>
        <CardsMaker deleteWord={deleteWord} wordsArray={wordsArray}
          searchString={searchString} filter = {filterWords} multipleSelect = {multipleSelect}
          pushSelectedId={pushSelectedId} selectedIds={selectedIds}/>
      </Segment>
    </div>
  )
}

HomePage.propTypes = {
  searchString: PropTypes.string,
  deleteWord: PropTypes.func,
  wordsArray: PropTypes.array,
  filterWords: PropTypes.func,
  isLoading: PropTypes.bool,
  multipleSelect: PropTypes.bool,
  toggleMultipleSelect: PropTypes.func,
  pushSelectedId: PropTypes.func,
  selectedIds: PropTypes.array
}

function mapStateToProps(state) {
  return {
    wordsArray: state.wordsState.filteredArray,
    searchString: state.wordsState.searchString,
    isLoading: state.wordsState.isLoading,
    multipleSelect: state.wordsState.multipleSelect,
    selectedIds: state.wordsState.selectedIds
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteWord: (id) => actions.deleteWord(id)(dispatch),
    filterWords: (searchString) => dispatch({ type: 'FILTER_WORDS', searchString }),
    toggleMultipleSelect: () => dispatch({ type: 'TOGGLE_MULTIPLE_SELECT' }),
    pushSelectedId: (id) => dispatch({ type: 'ADD_SELECTED_ID', id })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

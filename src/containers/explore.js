import React from 'react';
import { Card, Segment, Icon, Image, Search, Popup } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/wordsActions';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';


const CardsMaker = ({ searchResults, searchString, addWord, filterWords }) =>
  <Card.Group itemsPerRow={4}>
    {searchResults.map((element,id) =>
      <Card key={id} className="animated fadeIn">
        <Card.Content>
          <Image floated="right">
            <Popup
              trigger={<Icon  link name="plus" onClick={()=>{addWord({word:searchString,meaning:element.defenition,example:element.example});filterWords();}} />}
              content="Add to My Flashcards"
            />
          </Image>
          <Card.Header>
            {searchString}
          </Card.Header>
          <Card.Meta>
            {element.defenition}
          </Card.Meta>
          <Card.Description>
            {element.example}
          </Card.Description>
        </Card.Content>
      </Card>)}
  </Card.Group>

CardsMaker.propTypes = {
  searchResults: PropTypes.array,
  searchString: PropTypes.string,
  addWord: PropTypes.func,
  filterWords: PropTypes.func
}

const Explore = ({ search, searchResults, searchString, addWord, filterWords, updateSearchString, isLoading, resetGlobalSearchResults }) => {
  const handleSearchChange = (e, value) => {
    updateSearchString(value);
    value.trim() != '' ? search(value) : resetGlobalSearchResults();
    // if (value.trim() != '') {
    //   search(value);
    // }
  }
  return (
    <div className="main-container">
      <Search
        size="big"
        onSearchChange={handleSearchChange}
        open={false}
        icon="search"
        value={searchString}
        placeholder="Explore new words.."
        className="animated fadeIn"/>
      {isLoading && <Spinner spinnerName="three-bounce" />}
      {searchResults.length!=0 && !isLoading && <Segment basic>
        <CardsMaker searchResults={searchResults} searchString={searchString} addWord={addWord} filterWords={filterWords} />
      </Segment>}
      {((searchResults.length==0 && searchString.trim()!='') && !isLoading)  && <h1>No results found</h1>}
    </div>
  )
}

Explore.propTypes = {
  search: PropTypes.func,
  searchResults: PropTypes.array,
  searchString: PropTypes.string,
  addWord: PropTypes.func,
  filterWords: PropTypes.func,
  updateSearchString: PropTypes.func,
  isLoading: PropTypes.bool,
  resetGlobalSearchResults: PropTypes.func
}


function mapStateToProps({ globalSearchState }) {
  return {
    searchResults: globalSearchState.results,
    searchString: globalSearchState.searchString,
    isLoading: globalSearchState.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateSearchString: bindActionCreators(actions.updateGlobalSearchString, dispatch),
    search: (searchString) => actions.globalSearch(searchString)(dispatch),
    addWord: (wordObj) => actions.addWord(wordObj)(dispatch),
    filterWords: bindActionCreators(actions.filterWords, dispatch),
    resetGlobalSearchResults: bindActionCreators(actions.resetGlobalSearchResults, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);

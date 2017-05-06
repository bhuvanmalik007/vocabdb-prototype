import React from 'react';
import { Card, Segment, Icon, Image, Search, Popup } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/wordsActions';
import PropTypes from 'prop-types';

const CardsMaker = ({ searchResults, searchString, addWord, filterWords }) =>
  <Card.Group itemsPerRow={2}>
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
            {element.meaning}
          </Card.Meta>
          <Card.Description>
            {element.example}
          </Card.Description>
        </Card.Content>
      </Card>)}
  </Card.Group>;

CardsMaker.propTypes = {
  searchResults: PropTypes.array,
  searchString: PropTypes.string,
  addWord: PropTypes.func,
  filterWords: PropTypes.func
};

const audio = () =>{
  document.getElementById('audio').play();
};

const Explore = ({ search, searchResults, searchString, addWord, filterWords, updateSearchString, isLoading, resetGlobalSearchResults, pronounciation }) => {
  const handleSearchChange  = (e, value) => {
    updateSearchString(value);
    if(value.trim() != '') {
      search(value);
    }
    else resetGlobalSearchResults();
  };
  return (
    <div className="main-container">
      <audio id="audio" src={pronounciation}/>
      <Search
        size="big"
        onSearchChange={handleSearchChange}
        open={false}
        icon="search"
        value={searchString}
        placeholder="Explore new words.."
        className="animated fadeIn"/>
      {searchResults.length!=0 && !isLoading && pronounciation &&
        <Popup position="right center" trigger={<Icon inverted link name="volume up" size="huge" onClick={audio} />} content="Click to hear pronounciation"/>
      }
      {isLoading && <Icon loading size="huge" name="rocket" />}
      {searchResults.length!=0 && !isLoading && <Segment basic>
        <CardsMaker searchResults={searchResults} searchString={searchString} addWord={addWord} filterWords={filterWords} />
      </Segment>}
      {((searchResults.length==0 && searchString.trim()!='') && !isLoading)  && <h1>No results found</h1>}
    </div>
  );
};

Explore.propTypes = {
  search: PropTypes.func,
  searchResults: PropTypes.array,
  searchString: PropTypes.string,
  addWord: PropTypes.func,
  filterWords: PropTypes.func,
  updateSearchString: PropTypes.func,
  isLoading: PropTypes.bool,
  resetGlobalSearchResults: PropTypes.func,
  pronounciation: PropTypes.string
};


function mapStateToProps({ globalSearchState }) {
  return {
    searchResults: globalSearchState.results.words,
    pronounciation: globalSearchState.results.pronounciation,
    searchString: globalSearchState.searchString,
    isLoading: globalSearchState.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateSearchString: bindActionCreators(actions.updateGlobalSearchString, dispatch),
    search: bindActionCreators((searchString)=>({type:'PERFORM_GLOBAL_SEARCH',searchString}), dispatch),
    // search: (searchString) => actions.globalSearch(searchString)(dispatch),
    addWord: (wordObj) => actions.addWord(wordObj)(dispatch),
    filterWords: bindActionCreators(actions.filterWords, dispatch),
    resetGlobalSearchResults: bindActionCreators(actions.resetGlobalSearchResults, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);

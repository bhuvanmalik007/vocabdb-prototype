import React from 'react';
import { Card, Segment, Icon, Image, Search } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/wordsActions';
import  Spinner  from 'react-spinkit';

const CardsMaker = ({ searchResults, searchString, addWord, filterWords }) =>
  <Card.Group itemsPerRow={4}>
    {searchResults.map((element,id) =>
      <Card key={id}>
        <Card.Content>
          <Image floated='right'>
            <Icon  link name='plus' onClick={()=>{addWord({header:searchString,meta:element.defenition,description:element.example});filterWords();}} />
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

const Explore = ({ search, searchResults, searchString, addWord, filterWords, updateSearchString, isLoading }) => {
  const handleSearchChange = (e, value) => {
    updateSearchString(value);
    if (value.trim() != '') {
      search(value);
    }
  }
  return (
    <div>
      <Search
        onSearchChange={handleSearchChange}
        open={false}
        icon='search'
        value={searchString}
        placeholder="Explore new words.."/>
      {isLoading && <Spinner spinnerName="three-bounce" />}
      {searchResults.length!=0 && !isLoading && <Segment>
        <CardsMaker searchResults={searchResults} searchString={searchString} addWord={addWord} filterWords={filterWords} />
      </Segment>}
      {((searchResults.length==0 || searchString.trim()=='') && !isLoading)  && <h1>No results found</h1>}
    </div>
  )
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
    addWord: bindActionCreators(actions.addWord, dispatch),
    filterWords: bindActionCreators(actions.filterWords, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);

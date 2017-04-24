import React from 'react';
import { Card, Segment, Container, Icon, Image, Search } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/wordsActions';

const searchGoogle = (word) => {
  window.open('http://www.google.com/search?q=' + word, '_blank');
}

const CardsMaker = ({ deleteWord, wordsArray, searchString, filter }) =>
  <Card.Group itemsPerRow={4}>
    {wordsArray.map((element,id) =>
      <Card key={id}>
        <Card.Content>
          <Image floated='right'>
            <Icon  link name='google' onClick={()=>searchGoogle(element.header)} />
            <Icon link name='close'   onClick={()=>deleteWord(element)} />
          </Image>
          <Card.Header>
            {element.header}
          </Card.Header>
          <Card.Meta>
            {element.meta}
          </Card.Meta>
          <Card.Description>
            {element.description}
          </Card.Description>
        </Card.Content>
      </Card>)}
  </Card.Group>


const HomePage = (props) => {
  let handleSearchChange = (e, value) => {
    props.filterWords(value);
  }
  return (
    <div>
      <Search
        onSearchChange={handleSearchChange}
        open={false}
        icon='filter'
        placeholder="Search your words.."
        value={props.searchString}
      />
      <Segment>
        <CardsMaker deleteWord={props.deleteWord} wordsArray={props.wordsArray} searchString={props.searchString} filter = {props.filterWords}/>
      </Segment>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    wordsArray: state.wordsState.filteredArray,
    searchString: state.wordsState.searchString
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteWord: bindActionCreators(actions.deleteWord, dispatch),
    filterWords: bindActionCreators(actions.filterWords, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

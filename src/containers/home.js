import React from 'react';
import { Card, Segment, Container, Icon, Image } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/wordsActions';

const searchGoogle = (word)=>{
  window.open('http://www.google.com?q=' + word, '_blank');
}

const CardsMaker = ({deleteWord, wordsArray}) =>
  <Card.Group itemsPerRow={4}>
    {wordsArray.map((element,id) =>
      <Card key={id}>
        <Card.Content>
          <Image floated='right'>
            <Icon  link name='google' onClick={()=>searchGoogle(element.header)} />
            <Icon link name='close'   onClick={()=>deleteWord(id)} />
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
  return (
    <Container>
      <Segment>
        {/* <Card.Group itemsPerRow={4}> */}
          <CardsMaker deleteWord={props.deleteWord} wordsArray={props.wordsArray}/>

      </Segment>
    </Container>)
}

function mapStateToProps(state) {
  return {
    wordsArray: state.wordsArray
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteWord: bindActionCreators(actions.deleteWord, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);


// export default HomePage;

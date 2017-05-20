import React from 'react';
import { Form, Segment, Container, Button, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';



let AddWordForm = ({ handleSubmit, pristine, submitting }) => {
  // const { handleSubmit } = props;
  return (
    <Container>
      <Segment raised padded className="animated fadeIn">
        <Form onSubmit={handleSubmit}>
          <Form.Field width={4}>
            <label>Word</label>
            <Field name="word" type="text" component="input" placeholder="Enter Word" />
          </Form.Field>
          <Form.Field width={10}>
            <label>Meaning</label>
            <Field name="meaning" type="text" component="input" placeholder="Enter Word" />
          </Form.Field>
          {/* <Form.Group>
            <Form.Input label='Word' placeholder='Enter Word' width={4} />
            <Form.Input label='Meaning' placeholder='Enter Meaning' width={10} />
          </Form.Group> */}
          <Form.Field width={12}>
            <label>Example Sentence</label>
            <Field name="sentence" type="text" component="input" placeholder="Enter Example Sentence" />
          </Form.Field>

          <Divider horizontal>Or</Divider>
          <Form.Field width={15}>
            <label>Enter your words separated by commas:</label>
            <Field name="commaSeperatedWords"  component="textarea" placeholder="Enter your words and we'll automatically create flashcards for you" />
          </Form.Field>
          {/* <Form.Field control={TextArea} name="commaSeperatedWords" type="text" label="Enter your words separated by commas:" placeholder="Enter your words and we'll automatically create flashcards for you" /> */}

          <br/>
          <Form.Group>
            <Button type="submit" disabled={pristine || submitting}>Submit</Button>
          </Form.Group>
        </Form>
      </Segment>
    </Container>
  );
};

AddWordForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
};


// Decorate the form component
AddWordForm = reduxForm({
  form: 'addWord' // a unique name for this form
})(AddWordForm);

export default AddWordForm;

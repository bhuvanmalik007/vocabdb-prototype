import React from 'react'
import { Form, Input, Segment, Container, Button } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'


const AddWordForm = ({ handleSubmit }) => {
  // const { handleSubmit } = props;
  return (
  <Container>
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Field width={4}>
          <label>Word</label>
          <Field name="word" type='text' component="input" placeholder="Enter Word" />
        </Form.Field>
        <Form.Field width={10}>
          <label>Meaning</label>
          <Field name="meaning" type='text' component="input" placeholder="Enter Word" />
        </Form.Field>
        {/* <Form.Group>
          <Form.Input label='Word' placeholder='Enter Word' width={4} />
          <Form.Input label='Meaning' placeholder='Enter Meaning' width={10} />
        </Form.Group> */}
        <Form.Field width={12}>
          <label>Example Sentence</label>
          <Field name="sentence" type='text' component="input" placeholder="Enter Example Sentence" />

        </Form.Field>

        <br/>
        <Form.Group>
          <Button type='submit'>Submit</Button>
        </Form.Group>
      </Form>
    </Segment>
  </Container>
)}


// Decorate the form component
AddWordForm = reduxForm({
  form: 'addWord' // a unique name for this form
})(AddWordForm);

export default AddWordForm;

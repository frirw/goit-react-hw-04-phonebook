import React, { Component } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  margin-top: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: white;
  background-color: lightpink;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid gray;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 8px;
  border-radius: 5px;
  background-color: pink;
  color: white;
  border: none;
  cursor: pointer;
`;

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() === '' || this.state.number.trim() === '') {
      alert('Please fill in both name and number fields.');
      return;
    }
    this.props.submit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <InputWrapper>
          <Label htmlFor="Name">Name</Label>
          <Input
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            type="text"
            id="Name"
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="Number">Number</Label>
          <Input
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
            type="tel"
            id="Number"
          />
        </InputWrapper>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormContainer>
    );
  }
}

export default ContactForm;

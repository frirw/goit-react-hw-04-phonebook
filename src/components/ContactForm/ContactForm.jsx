import React, { useState } from 'react';
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

const ContactForm = ({ submit }) => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.name.trim() === '' || formData.number.trim() === '') {
      alert('Please fill in both name and number fields.');
      return;
    }
    submit(formData);
    reset();
  };

  const reset = () => {
    setFormData({ name: '', number: '' });
  };

  const handleChange = ({ target: { value, name } }) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputWrapper>
        <Label htmlFor="Name">Name</Label>
        <Input
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={formData.name}
          onChange={handleChange}
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
          value={formData.number}
          onChange={handleChange}
          name="number"
          type="tel"
          id="Number"
        />
      </InputWrapper>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;

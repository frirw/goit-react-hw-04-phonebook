import React, { useState } from 'react';
import css from './ContactForm.module.css';

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
    <form className={css.formContainer} onSubmit={handleSubmit}>
      <div className={css.inputWrapper}>
        <label htmlFor="Name" className={css.label}>
          Name
        </label>
        <input
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={formData.name}
          onChange={handleChange}
          name="name"
          type="text"
          id="Name"
          className={css.input}
        />
      </div>
      <div className={css.inputWrapper}>
        <label htmlFor="Number" className={css.label}>
          Number
        </label>
        <input
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
          value={formData.number}
          onChange={handleChange}
          name="number"
          type="tel"
          id="Number"
          className={css.input}
        />
      </div>
      <button type="submit" className={css.submitButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

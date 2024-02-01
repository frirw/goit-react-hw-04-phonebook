import PropTypes from 'prop-types';
import React from 'react';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => (
  <>
    <label htmlFor="filter" className={css.filterLabel}>
      Find contacts by name
    </label>
    <input
      type="text"
      placeholder="Search contacts"
      value={value}
      onChange={onChange}
      id="filter"
      className={css.filterInput}
    />
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;

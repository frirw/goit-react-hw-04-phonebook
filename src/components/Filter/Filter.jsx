import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: white;
  background-color: lightpink;
`;

const FilterInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

export const Filter = ({ value, onChange }) => (
  <>
    <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
    <FilterInput
      type="text"
      placeholder="Search contacts"
      value={value}
      onChange={onChange}
      id="filter"
    />
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: pink;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const ContactListItem = ({ data, deleteContact }) => {
  return (
    <ListItem key={data.id}>
      <span>
        {data.name} : {data.number}
      </span>
      <Button onClick={() => deleteContact(data.id)} type="button">
        Delete
      </Button>
    </ListItem>
  );
};

export default ContactListItem;

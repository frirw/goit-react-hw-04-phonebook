import React from 'react';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ data, deleteContact }) => {
  return (
    <li className={css.listItem} key={data.id}>
      <span>
        {data.name} : {data.number}
      </span>
      <button
        onClick={() => deleteContact(data.id)}
        type="button"
        className={css.button}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;

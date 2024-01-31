import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(el => (
        <ContactListItem key={el.id} data={el} deleteContact={deleteContact} />
      ))}
    </ul>
  );
};

import React from "react";
import PropTypes from 'prop-types';
import css from "./ContactList.module.css";

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={css.contactsList}>
            {contacts.map(contact => (
                <li className={css.contactsItem} key={contact.id}>
                    <span>{contact.name}:</span> <span>{contact.number}</span>
                    <button className={css.contactsBtn} type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
};

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
	onDeleteContact: PropTypes.func.isRequired,
}
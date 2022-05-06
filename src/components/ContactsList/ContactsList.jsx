import { Component } from 'react';
import PropTypes from 'prop-types';

import { ContactsListItem } from './ContactsListItem';
import s from './ContactsList.module.css';

export class ContactsList extends Component {
  static defaultProps = {
    contacts: [],
  };
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    handleRemove: PropTypes.func.isRequired,
  };
  render() {
    const { contacts, handleRemove } = this.props;
    return (
      <ul className={s.container}>
        {contacts.length ? (
          <ContactsListItem contacts={contacts} handleRemove={handleRemove} />
        ) : (
          'No contacts'
        )}
      </ul>
    );
  }
}

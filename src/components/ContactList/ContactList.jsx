import ContactElement from 'components/ContactElement/ContactElement';
import Loader from 'components/Loader/Loader';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'services/phonebookApi';
import { Info, List } from './ContactList.styled';

export const ContactList = () => {
  const {
    data: contacts = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);

  let filteredContacts = useMemo(() => {
    return contacts
      .filter(c => c.name.toLowerCase().includes(filter))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [contacts, filter]);

  let content = <Info>No contacts in the phonebook</Info>;

  if (isLoading) {
    content = <Loader>Loading...</Loader>;
  } else if (isSuccess) {
    filteredContacts.length !== 0
      ? (content = (
          <List>
            {filteredContacts.map(c => (
              <ContactElement
                key={c.id}
                id={c.id}
                name={c.name}
                phone={c.phone}
              />
            ))}
          </List>
        ))
      : (content = <Info>No contacts in the phonebook</Info>);
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <>{content}</>;
};

export default ContactList;
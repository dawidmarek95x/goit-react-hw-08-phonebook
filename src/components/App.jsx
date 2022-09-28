import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AppWrapper, LogoIcon } from './App.styled';

export const App = () => {
  return (
    <AppWrapper>
      <h1>
        <LogoIcon />
        Phonebook
      </h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </AppWrapper>
  );
};

export default App;
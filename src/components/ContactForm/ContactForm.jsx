import { Form } from './ContactForm.styled';
import { useAddContactMutation, useGetContactsQuery } from 'services/phonebookApi';

const ContactForm = () => {
  const {
    data: contacts = [],
  } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const addNewContact = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    if (contacts.some(c => c.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    if (contacts.some(c => c.number === number)) {
      const [contactWithPhone] = contacts.filter(c => c.number === number);

      return alert(
        `Number ${contactWithPhone.number} is already in phonebook. It belongs to ${contactWithPhone.name}.`
      );
    }

    try {
      await addContact({
        name,
        number,
      });
    } catch (error) {
      alert(`Failed to save contact ${name} in Phonebook!`);
    }

    form.reset();
  };

  return (
    <Form onSubmit={addNewContact}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </Form>
  );
};

export default ContactForm;

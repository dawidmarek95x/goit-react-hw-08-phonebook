import { Button, Form, Input, Label } from './ContactForm.styled';
import { nanoid } from '@reduxjs/toolkit';
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
    const phone = form.phone.value;

    if (contacts.some(c => c.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    if (contacts.some(c => c.phone === phone)) {
      const [contactWithPhone] = contacts.filter(c => c.phone === phone);

      return alert(
        `Number ${contactWithPhone.phone} is already in phonebook. It belongs to ${contactWithPhone.name}.`
      );
    }

    try {
      await addContact({
        id: nanoid(),
        name,
        phone,
      });
    } catch (error) {
      alert(`Failed to save contact ${name} in Phonebook!`);
    }

    form.reset();
  };

  return (
    <Form onSubmit={addNewContact}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;

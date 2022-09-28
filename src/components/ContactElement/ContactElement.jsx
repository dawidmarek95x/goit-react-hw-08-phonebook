import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'services/phonebookApi';
import {
  Button,
  ContactName,
  Item,
  TelBtn,
  Wrapper,
} from './ContactElement.styled';

export const ContactElement = ({ id, name, phone }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <Item>
      <Wrapper>
        <ContactName>{name}:</ContactName>
        <span>{phone}</span>
        <TelBtn as="a" href={`tel:${phone}`}>
          {' '}
        </TelBtn>
        <Button
          type="button"
          onClick={() => deleteContact(id)}
        ></Button>
      </Wrapper>
    </Item>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ContactElement;

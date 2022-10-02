import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'services/phonebookApi';
import {
  Button,
  ContactName,
  Item,
  TelBtn,
  Wrapper,
} from './ContactElement.styled';

export const ContactElement = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <Item>
      <Wrapper>
        <ContactName>{name}:</ContactName>
        <span>{number}</span>
        <TelBtn as="a" href={`tel:${number}`}>
          {' '}
        </TelBtn>
        <Button type="button" onClick={() => deleteContact(id)}></Button>
      </Wrapper>
    </Item>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ContactElement;

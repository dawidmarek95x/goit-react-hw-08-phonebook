import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/slices/filterSlice';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterContacts = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <>
      <Label>
        Find contacts by name
        <Input type="text" onChange={filterContacts} />
      </Label>
    </>
  );
};

export default Filter;
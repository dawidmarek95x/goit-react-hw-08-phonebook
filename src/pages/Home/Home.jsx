import React from 'react';
import { useSelector } from 'react-redux';
import { ForwardingLink, Section } from './Home.styled';

const Home = () => {
  const token = useSelector(state => state.token);

  return (
  <Section>
    <h3>Welcome to Phonebook!</h3>
    <p>
    Have you ever had an appointment with a friend or a business meeting in a new place unknown to you, but unfortunately you forgot your smartphone or your battery has run out and you were not able to contact this person?
    </p>
    <p>
    Or maybe your smartphone has ever crashed and you have lost most of your contacts?
    </p>
    <p>
    In these and other situations, the solution may be the Phonebook, which is an application for storing your contacts and redirecting you to call them.
    </p>
    {!token && <p>
     <ForwardingLink to="/register">Sign up</ForwardingLink> or <ForwardingLink to="/login">log in</ForwardingLink> to get started!
    </p>}
  </Section>
  );
};

export default Home;

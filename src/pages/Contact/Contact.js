import React, { useRef } from 'react';
import StyledContactForm from './Contact.styled';

const Contact = () => {
  const form = useRef();

	return(
		 <StyledContactForm>
      <form ref={form} action="mailto:yashvi.lad@gmail.com" method="post" encType="text/plain">
		  <h2>Contact Me</h2>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
	);
};

export default Contact;
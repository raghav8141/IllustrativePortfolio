import React, { useRef } from 'react';
import StyledContactForm from './Contact.styled';
import InstagramLogo from '../../images/3621435.png';
import LinkedinLogo from '../../images/linkedin-logo-linkedin-icon-transparent-free-png.webp'
import GmailLogo from '../../images/Gmail_icon_(2020).svg.png';

const Contact = () => {
  const form = useRef();

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailInput = form.current.elements.Email;

    if (!validateEmail(emailInput.value)) {
      // Email validation failed
      alert('Please enter a valid email address');
      return;
    }
    form.current.submit();
  };

	return(

<StyledContactForm>
  <div className="content-wrapper">
	<div className="container">
		<div className='form-box'>
				<div className="row">
					<div className="column">
						<form ref={form} onSubmit={handleSubmit} action="mailto:Raghavparikh1997@gmail.com" method="post" encType="text/plain">
							<h2>Contact Me</h2>
							<label className='required'>Name</label>
							<input type="text" name="Name" required/>
							<label className='required'>Email</label>
							<input type="email" name="Email" required/>
							<label className='required'>Message</label>
							<textarea name="Message" required/>
							<input type="submit" value="Send" />
						</form>
					</div>			
					<div className= "column logo-section">
						<div className="sidebar">
							<a href="https://www.instagram.com/raghav.parikh/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
								<img className="image1" src={InstagramLogo} alt="Instagram" />
							</a>
							<a href="https://www.linkedin.com/in/raghav-parikh-392233172">
								<img className="image2" src={LinkedinLogo} alt="LinkedIn" />
							</a>
							<a href="mailto:Raghavparikh1997@gmail.com">
								<img className="image3" src={GmailLogo} alt="Gmail" />
							</a>
						</div>
					</div>
			</div>
		</div>
  	</div>
</div>
</StyledContactForm>
);
};

export default Contact;
import React, { useRef, useState } from 'react';
import StyledContactForm from './Contact.styled';
import emailjs from '@emailjs/browser';
import InstagramLogo from '../../images/3621435.png';
import LinkedinLogo from '../../images/linkedin-logo-linkedin-icon-transparent-free-png.webp'
import GmailLogo from '../../images/Gmail_icon_(2020).svg.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const Contact = () => {
  const form = useRef();
  
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email).then(() => {
		setShowCopyMessage(true);
      setTimeout(() => setShowCopyMessage(false), 2000);
    });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailInput = form.current.elements.Email;

    if (!validateEmail(emailInput.value)) {
      alert('Please enter a valid email address');
      return;
    }
	
    emailjs
      .sendForm(
        'service_oc3z8zb', // Replace with your service ID
        'template_paw9z5v', // Replace with your template ID
        form.current,
        'fdrhuy-BxqiNIeH8Y'   // Replace with your public key
      )
      .then(
        (result) => {
          toast.success('Message sent successfully!', {
            position: "top-right",  
            autoClose: 5000,        
            hideProgressBar: false, 
            closeOnClick: true,     
            pauseOnHover: true,     
            draggable: true,        
            progress: undefined,    
            style: {                
              fontSize: '18px',     
              padding: '15px',      
              borderRadius: '8px',  
            },
          });
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message, please try again later.', {
            position: "top-right",  
            autoClose: 5000,        
            hideProgressBar: false, 
            closeOnClick: true,     
            pauseOnHover: true,     
            draggable: true,        
            progress: undefined,    
            style: {                
              fontSize: '18px',     
              padding: '15px',      
              borderRadius: '8px',  
            },
          });
          console.error(error);
        }
      );
  };

	return(

<StyledContactForm>
  <div className="content-wrapper">
	<div className="container">
		<div className='form-box'>
				<div className="row">
					<div className="column">
						<form ref={form} onSubmit={handleSubmit}>
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
							<div style={{ position: 'relative', display: 'inline-block' }}>
								<button
									onClick={() => copyToClipboard('Raghavparikh1997@gmail.com')}
									className="email-logo-button"
								>
									<img className="image3" src={GmailLogo} alt="Gmail" />
								</button>
								{showCopyMessage && (
									<div className="copy-message">Email copied</div>
								)}
							</div>
						</div>
					</div>
			</div>
		</div>
  	</div>
</div>
 <ToastContainer /> 
</StyledContactForm>
);
};

export default Contact;


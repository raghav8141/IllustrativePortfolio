import styled from 'styled-components';
// import './reset.css';

const StyledContactForm = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #ccc;

  .row {
    display: flex;
  }

  .column {
    flex-basis: 50%;
   //  margin-top: -20px;
    padding: 20px;
    box-sizing: border-box;
	 position: relative;
	 top: -30px;
    right:1%;
  }

  .column.logo-section {
	//  position: absolute;
	//  top: 50%;
   //  left: 67.7%;
   //  transform: translate(-50%, -50%); 
	
	 top: 5%;
	 left: -3%;
	 display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .column-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

  .logo-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
}

 .form-box {
    border: 1px solid black;
    padding: 10px;
	//  width: 100%;
    width: 600px;
	 height: 550px;
	 display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
	 background: #f0f0f0;
	//  e0e0e0
  }

  form {
    display: flex;
    flex-direction: column;
	 position: relative;
    width: 500px;
    font-size: 16px;

	 h2 {
		text-align: center;
		font-size: 30px;
	}

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }

	 label.required::after {
		content: " *";
		color: red;
	 }

    input[type="submit"] {
      margin-top: 2rem;
		margin-left: 10px;
      cursor: pointer;
      background: rgb(0, 0, 0);
      color: white;
      border: none;
    }
	}

	.container {
  display: flex;
  justify-content: space-between;
}

   .sidebar {
    display: flex;
	 flex-direction: column;
    align-items: center;
	 gap: 10px;
    
    a {
       text-decoration: none;
       color: #000;

		 .image1 {
        width: 49px; 
        height: 49px; 
        margin-top: 2rem;
		//   display: block; 
		  margin: 0 auto;
      }

		.image2 {
        width: 53px; 
        height: 53px; 
        margin-top: 2rem;
		//   display: block; 
		  margin: 0 auto;
      }

		.image3 {
        width: 30px; 
        height: 27px; 
        margin-top: 2rem;
		//   display: block; 
		  margin: 0 auto;
      }
    }
  }

  @media (max-width: 768px) {
    form {
      width: 90%;
      font-size: 14px;
    }

  }

  @media (max-width: 576px) {
    form {
      width: 100%;
      font-size: 12px;

      input[type="submit"] {
        width: 100%;
      }


		.sidebar {
			a {
				margin-top: 3rem; 
			}  
      }

    }
  }
`;

export default StyledContactForm;

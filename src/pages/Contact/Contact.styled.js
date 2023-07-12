import styled from 'styled-components';

const StyledContactForm = styled.div`
  display: flex;
  justify-content: center; 
  width: 100%;
  height: 100vh;

//   .row {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//   }

//   .column {
//     flex: 1;
//     margin-top: 6px;
//     padding: 20px;
//   }

  form {
    display: flex;
   //  align-items: flex-start;
    flex-direction: column;
	 position: relative;
    width: 700px;
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
		position: absolute;
		bottom: -3rem; /* Add this line */
		left: 52%; /* Add this line */
		transform: translateX(-50%); /* Add this line */
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(0, 0, 0);
      color: white;
      border: none;
    }
	}

  .sidebar {
    display: flex;
    align-items: center;
	 justify-content: center;
    
    a {
      margin-top: 60px;
       text-decoration: none;
       color: #000;

		 .image1 {
        width: 50px; 
        height: 40px; 
        margin-top: 2rem;
		  display: block; 
		  margin: 0 auto;
      }

		.image2 {
        width: 55px; 
        height: 55px; 
        margin-top: 2rem;
		  display: block; 
		  margin: 0 auto;
      }
    }
  }

//   a {
//       margin-top: 10px;
//        text-decoration: none;
//        color: #000;

// 		 .image1 {
//         width: 45px; 
//         height: 45px; 
//         margin-top: 2rem;
// 		  display: block; /* Ensures the image is displayed as a block element */
// 		  margin: 0 auto;
//       }

// 		.image2 {
//         width: 60px; 
//         height: 60px; 
//         margin-top: 2rem;
// 		  display: block; /* Ensures the image is displayed as a block element */
// 		  margin: 0 auto;
//       }
//     }
`;

// const StyledContactForm = styled.div`
//   display: flex;
//   justify-content: center; 
//   width: 100%;
//   height: 100vh;
  
//   .content-wrapper {
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;
//     width: 800px;
//     font-size: 16px;
//   }
  
//   form {
//     display: flex;
//     flex-direction: column;
//     width: 400px;
//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
      
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
    
//     label {
//       margin-top: 10px;
//     }
    
//     textarea {
//       width: 100%;
//       height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
      
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
    
//     input[type="submit"] {
//       margin-top: 10px;
//       padding: 10px 15px;
//       background-color: #00ce9e;
//       color: #fff;
//       border: none;
//       border-radius: 5px;
//       cursor: pointer;
//     }
//   }
  
//   .sidebar {
//     width: 350px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// 	 justify-content: center;
// 	 margin-left: 50px;
// 	 margin-top: auto;
//   	 margin-bottom: auto; 
    
//     a {
//       margin-top: 10px;
//       text-decoration: none;
//       color: #000;
//     }
//   }
// `;

export default StyledContactForm;

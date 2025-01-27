import styled from 'styled-components';

const StyledContactForm = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 100%;
  height: 105vh;
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
	//  top: 6%;
	 left: -8%;
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

	.email-logo-button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
	}

	.email-logo-button img {
		width: 65%;
		height: auto;
	}

	.copy-message {
		position: absolute;
		top: -30px; /* Adjust to position the box above the logo */
		left: 50%;
		transform: translateX(-50%);
		background-color: #333;
		color: white;
		padding: 5px 10px;
		border-radius: 5px;
		font-size: 12px;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
		white-space: nowrap;
		z-index: 10;
  		animation: fadeOut 2s ease forwards;
	}

	@keyframes fadeOut {
		0% {
			opacity: 1;
		}
		80% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

 .form-box {
    border: 1px solid black;
    padding: 10px;
	 width: 100%;
    max-width: 700px;
	 height: 550px;
	 display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
	 background: #f0f0f0;
	 box-sizing: border-box;
	 margin: 20px auto;
	 //  e0e0e0
   }

  form {
    display: flex;
	 align-items: flex-start;
	 justify-content: flex-start;
    flex-direction: column;
	//  position: relative;
	 width: 550px;
	//  width: 90%;
    font-size: 16px;
	 margin: 20px auto;

		h2 {
			text-align: center;
			font-size: 30px;
		}

		input {
			width: 100%;
			height: 35px;
			padding: 0px;
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
				padding: 0px;
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
			// margin-left: 10px;
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
				margin: 0 auto;
			}

			.image2 {
				width: 53px; 
				height: 53px; 
				margin-top: 2rem;
				margin: 0 auto;
			}

			.image3 {
				width: 30px; 
				height: 27px; 
				margin-top: 2rem;
				margin: 0 auto;
			}
      }
	}
	
	@media only screen and (max-width: 768px) {
    .row {
      flex-direction: column;
    }
    .column {
      flex-basis: 100%;
      padding: 20px 0;
      top: 0;
      right: 0;
    }
    .sidebar {
      flex-direction: row;
      justify-content: space-between;
    }
    .column.logo-section {
      flex-direction: row;
      gap: 20px;
    }
    .container {
      flex-direction: column;
      align-items: center;
    }
    form {
      width: 90%;
      max-width: 400px;
		margin-top: 20px;
    }
  }
`;

export default StyledContactForm;

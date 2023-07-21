import styled from 'styled-components';

export const HomeContainer = styled.div`
    position: relative;
    text-align: center;
	 overflow: hidden;
`;

// export const BackgroundImg = styled.img`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: 50;
// `;

export const BackgroundImg = styled.img`
  position: fixed;
  top: ${({ overlay }) => (overlay ? '0' : '8%')};
  left: 0;
  right: 10%;
  bottom: 0;
  width: 100%;
  height: ${({ overlay }) => (overlay ? '100%' : 'calc(100% - 8%)')};
  object-fit: cover;
  z-index: 50;
`;

export const Name = styled.div`
    position: absolute;
    top: 20%;
    color: #f2f2f2;
    transform: translate(-50%, -50%);
    left: 50%;
    font-size: 70px;

	 @media (max-width: 768px) {
    top: 15%;
    font-size: 18px;
  	}

  	@media (max-width: 576px) {
    top: 10%;
    font-size: 14px;
  }
`;
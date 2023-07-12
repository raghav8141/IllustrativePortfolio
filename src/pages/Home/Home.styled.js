import styled from 'styled-components';

export const HomeContainer = styled.div`
    position: relative;
    text-align: center;
	 overflow: hidden;
`;

export const BackgroundImg = styled.img`
//   height: 2000px;
//   width: 2000px;
//   object-fit: cover;
  position: fixed;
  top: 9%	;
  left: 0.0%;
  right: 10%;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.div`
    position: absolute;
    top: 20%;
    color: #f2f2f2;
    transform: translate(-50%, -50%);
    left: 50%;
    font-size: 70px;
`;
import styled, { keyframes } from 'styled-components';
import { media } from '../../theme';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SplitterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  
  & > svg {
    height: 50px;
    width: 150vw;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.mainPink};
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > .preview {
    height: 750px;
  }

  & > .logo {
    width: 400px;
    height: 400px;
  }

  ${media.tablet`
    height: auto;
    flex-direction: column;
    width: 600px;
  `}
`;

export const LogoContainer = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > .logoCircle {
    width: 400px;
    height: 400px;
    position: absolute;
    animation: ${rotate} 30s linear infinite;

    ${media.tablet`
      position: static;
  `}
  }

  & > .logo {
    width: 300px;
    position: absolute;
    z-index: 2;
    ${media.tablet`
      width: 150px;
  `}
  }

  ${media.tablet`
    padding-top: 80px;
    width: 200px;
    height: 200px;
  `}
`;
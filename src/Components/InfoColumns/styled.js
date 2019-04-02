import styled from 'styled-components';
import { media } from '../../theme';

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 100px 0;
`;

const margin = "20px";

export const ContentContainer = styled.div`
  width: 1280px;
  padding: 0 40px;
  display: flex;

  & div:first-child {
    margin-right: ${margin};
    
    ${media.tablet`
      margin-right: 0;
    `}
  }

  & div:nth-child(2) {
    margin: 0 ${margin};

    ${media.tablet`
      margin: 0 0;
    `}
  }

  & div:last-child {
    margin-left: ${margin};
    ${media.tablet`
      margin-left: 0;
    `}
  }
  
  ${media.tablet`
    flex-direction: column;
  `}
`;

export const Column = styled.div`

`;
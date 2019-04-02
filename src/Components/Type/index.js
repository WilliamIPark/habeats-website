import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${props => props.theme.colors.mainPink};
  font-family: 'Fredoka One', sans-serif;
  font-weight: normal;
  font-size: 36px;
`;

export const Body = styled.p`
  color: ${props => props.theme.colors.mainPurple};
  font-family: 'Varela Round', sans-serif;
  font-size: 20px;
  line-height: 32px;
`;

export const H1Alt = styled(H1)`
  color: white;
`;

export const BodyAlt = styled(Body)`
  color: white;
`;
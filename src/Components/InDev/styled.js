import styled from 'styled-components';
import { media } from '../../theme';

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
    transform: rotate(180deg)
  }
`;

export const InDevContainer = styled.div`
  height: 800px;
  width: 100%;
  background-color: ${props => props.theme.colors.mainPink};
  display: flex;
  justify-content: center;
  padding-bottom: 200px;
`;

export const ContentContainer = styled.div`
  width: 1280px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;

  & > .sketchyPhone {
    width: 900px;
    ${media.tablet`
      display: none;
    `}
  }
`;

export const TextContainer = styled.div`
  width: 600px;
  ${media.tablet`
      width: 100%;
      margin-right: 30px;
    `}
`;

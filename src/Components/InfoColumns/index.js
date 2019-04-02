import React from 'react';
import { InfoContainer, ContentContainer, Column} from './styled';
import { H1, Body } from '../Type';


const InfoColumns = () => {
  return (
    <InfoContainer>
      <ContentContainer>
        <Column>
          <H1>Fast. Easy to use.</H1>
          <Body>Easily log your daily progress at the speed of light. Habeats streamlines the process of logging your day so using Habeats itself becomes an easy habit to get into.</Body>
        </Column>
        <Column>
          <H1>Motivating.</H1>
          <Body>Gain motivation to complete your day with daily and weekly progress being a digestible goal to take on. Earn streaks as you continue on your journey.</Body>
        </Column>
        <Column>
          <H1>Progressive.</H1>
          <Body>Never lose sight of how far you have come. Every single day of progress you have made can be visualized, making your achievements beautifully clear.</Body>
        </Column>
      </ContentContainer>
    </InfoContainer>
  );
}
 
export default InfoColumns;
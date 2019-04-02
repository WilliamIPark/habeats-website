import React from 'react';
import { SplitterContainer, InDevContainer, ContentContainer, TextContainer } from './styled';
import { ReactComponent as HeroSplit } from './heroSplit.svg';
import { ReactComponent as SketchyPhone } from './sketchyPhone.svg';
import { H1Alt, BodyAlt } from '../Type';
import MailingList from '../MailingList';

const InDev = () => {
  return (
  <SplitterContainer>
    <HeroSplit />
    <InDevContainer>
      <ContentContainer>
        <TextContainer>
          <H1Alt>Releasing in 2019.</H1Alt>
          <BodyAlt>
            Habeats is currently still in active development.
          </BodyAlt>
          <BodyAlt>
            I want Habeats to be a fantastic application that genuinely helps people with their daily lives,
            so I want to build it right. Habeats is releasing to both iOS and Android. You can request a reminder
            to your email address below!
          </BodyAlt>

          <H1Alt>Can't wait?</H1Alt>
          <BodyAlt>
            I'll be releasing an early access version of Habeats. This free version of Habeats will help refine the
            final version of the application, to make sure I launch a quality application.
            Signing up for a release reminder will mean getting access to this version!
          </BodyAlt>
          <MailingList />
        </TextContainer>
        <SketchyPhone className="sketchyPhone"/>
      </ContentContainer>
    </InDevContainer>
  </SplitterContainer>
  );
}
 
export default InDev;
import React from 'react';
import { SplitterContainer, HeroContainer, ContentContainer, LogoContainer} from './styled';
import previewPhone from './preview-phone.png';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as LogoCircle } from './logoCircle.svg';
import { ReactComponent as HeroSplit } from './heroSplit.svg';


const Hero = () => {
  return (
  <SplitterContainer>
    <HeroContainer>
      <ContentContainer>
        <LogoContainer>
          <Logo className="logo" />
          <LogoCircle className="logoCircle" />
        </LogoContainer>
        <img src={previewPhone} alt="Habeats App" className="preview" />
      </ContentContainer>
    </HeroContainer>
    <HeroSplit />
  </SplitterContainer>
  );
}
 
export default Hero;
import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';




const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         Hello,
        </SectionTitle>
        <SectionText>
          This is Gabrielsoft. I am a Open Source & Web developer
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/Entry-Role-Resume(1).pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

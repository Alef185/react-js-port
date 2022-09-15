import React from 'react';

import { Section, SectionText, SectionTitle, } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Link } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Meu nome é <br />
          Álef de Souza Rosa
        </SectionTitle>
        <SectionText>
        Sou analista de qualidade, desenvolvedor web / mobile, web designer e ilustrador por hobbie.
        </SectionText>
        <Button onClick={props.handleClick}><Link href='#about'>Ler mais</Link></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

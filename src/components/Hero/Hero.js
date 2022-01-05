import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Meu nome é <br />
          Álef de Souza Rosa
        </SectionTitle>
        <SectionText>
        Sou Técnico em Desenvolvimento de Sistemas, e busco uma oportunidade na área de desenvolvimento.
        </SectionText>
        <Button onClick={props.handleClick}>Ler mais</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
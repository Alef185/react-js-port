import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 260, text: 'Contribuições no Github'},
  { number: 45, text: 'Repositórios no Github', },
  { number: 2000, text: 'Linhas de código escritas em um único dia', },
  { number: 15, text: 'Sites projetados e desenvolvidos', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Consquistas pessoais</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;

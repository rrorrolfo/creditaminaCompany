import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="ventajas">
    <StyledContainer>
      <Subtitle>Ventajas</Subtitle>
      <SectionTitle>Lo que nos diferencia de otros competidores:</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Rapidez y calidad</FeatureTitle>
          <FeatureText>
            El servicio más rápido y con la mejor calidad.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Proceso automatizado</FeatureTitle>
          <FeatureText>100% en línea.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>500,000 +</FeatureTitle>
          <FeatureText>Clientes satisfechos y contando.</FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`

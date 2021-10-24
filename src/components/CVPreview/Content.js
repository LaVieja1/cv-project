import React from "react";
import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";
import Section from "../Utils/Section";

const Content = ({ personalInfo, experience, education }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
  ));

  const educationItems = education.map((educationItem) => (
    <EducationItem key={educationItem.id} educationItem={educationItem} />
  ));

  return (
    <ContentWrapper>
      <Section title="Descripción" contrastTitle>
        <Description>{personalInfo.description}</Description>
      </Section>
      <Section title="Experiencia" direction="column" contrastTitle>
        {experienceItems}
      </Section>
      <Section title="Educación" direction="column" contrastTitle>
        {educationItems}
      </Section>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.light};
`;

const Description = styled.div`
  font-style: italic;
`;

export default Content;
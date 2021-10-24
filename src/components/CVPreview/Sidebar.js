import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import Subsection from "../Utils/Subsection";

const Sidebar = ({ personalInfo }) => {
    return (
        <SidebarWrapper>
            <Photo src={personalInfo.photo} />
            <Section title="Detalles personales" contrastTitle direction="column">
                <Subsection title="Dirección">{personalInfo.address}</Subsection>
                <Subsection title="Numero de teléfono">{personalInfo.phoneNumber}</Subsection>
                <Subsection title="Email">{personalInfo.email}</Subsection>
            </Section>
        </SidebarWrapper>
    );
};

const SidebarWrapper = styled.div`
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.lightSecondary};
`;

const Photo = styled.img`
    margin-buttom: 2rem;
`;

export default Sidebar;
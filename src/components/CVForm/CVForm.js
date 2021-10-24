import React from "react";
import styled from "styled-components";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Button from "../Utils/Button";

const CVForm = ({
    cv,
    onChangePersonal,
    onChangeExperience,
    onAddExperience,
    onDeleteExperience,
    onChangeEducation,
    onAddEducation,
    onDeleteEducation,
    onPrint,
    onLoadExample,
    onReset,
}) => {
    return (
        <CVFormWrapper>
            <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
            <Experience
                experience={cv.experience}
                onChange={onChangeExperience}
                onAdd={onAddExperience}
                onDelete={onDeleteExperience}
            />
            <Education
                education={cv.education}
                onChange={onChangeEducation}
                onAdd={onAddEducation}
                onDelete={onDeleteEducation}
            />
            <>
                <Button text="Generar PDF" onClick={onPrint} primary></Button>
                <Button text="Cargar Ejemplo" onClick={onLoadExample} secondary></Button>
                <button text="Reiniciar" onClick={onReset} red></button>
            </>
        </CVFormWrapper>
    );
};

const CVFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 210mm;
    padding: 2rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.light};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default CVForm;
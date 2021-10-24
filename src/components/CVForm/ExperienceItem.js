import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";

const ExperienceItem = ({ id, experienceItem, onChange, onDelete }) => {
    return (
        <>
            <Input
                onChange={(e) => onChange(e, id)}
                type="text"
                name="position"
                placeholder="Posición"
                value={experienceItem.position}
            />
            <Input
                onChange={(e) => onChange(e, id)}
                type="text"
                name="company"
                placeholder="Empresa"
                value={experienceItem.company}
            />
            <Input
                onChange={(e) => onChange(e, id)}
                type="text"
                name="city"
                placeholder="Ciudad"
                value={experienceItem.city}
            />
            <Input
                onChange={(e) => onChange(e, id)}
                type="text"
                name="from"
                placeholder="Desde"
                value={experienceItem.from}
            />
            <Input
                onChange={(e) => onChange(e, id)}
                type="text"
                name="to"
                placeholder="Desde"
                value={experienceItem.to}
            />
        </>
    );
};

export default ExperienceItem;
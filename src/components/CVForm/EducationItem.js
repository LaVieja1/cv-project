import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";

const EducationItem = ({ id, educationItem, onChange, onDelete }) => {
    return (
        <>
            <Input
                onChange={(e) => onChange(e, id)}
                type="text"
                name="universityName"
                placeholder="Nombre de universidad"
                value={educationItem.universityName}
            />
            <Input
                onChange={(e) => onChange(e, id)}
                type="text"
                name="city"
                placeholder="Ciudad"
                value={educationItem.city}
            />
            <Input
                onChange={(e) => onChange(e, id)}
                type="text"
                name="degree"
                placeholder="Título"
                value={educationItem.degree}
            />
            <Input
                onChange={(e) => onChange(e, id)}
                type="text"
                name="subject"
                placeholder="Carrera"
                value={educationItem.subject}
            />
            <Input
                onChange={(e) => onChange(e, id)}
                type="text"
                name="from"
                placeholder="Desde"
                value={educationItem.from}
            />
            <Input
                onChange={(e) => onChange(e, id)}
                type="text"
                name="to"
                placeholder="Hasta"
                value={educationItem.to}
            />
            <Button text="Borrar" onClick={() => onDelete(id)}></Button>
        </>
    )
}
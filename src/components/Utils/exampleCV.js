import { v4 as uuidv4 } from 'uuid';
import examplePhoto from '../../assets/example_photo.jpg';

const exampleCV = {
    personalInfo: {
        firstName: 'Santiago',
        lastName: 'Cano',
        title: 'Senior Web Developer',
        photo: examplePhoto,
        address: 'Calle False 123',
        phoneNumber: '123456789',
        email: 'santicano999@gmail.com',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
    },
    experience: [
        {
            id: uuidv4(),
            position: 'Senior Web Developer',
            company: 'Google',
            city: 'New York',
            from: '2020',
            to: 'Presente',
        },
        {
            id: uuidv4(),
            position: 'Junior Web Developer',
            company: 'Tesla',
            city: 'Sillicon Valley',
            from: '2018',
            to: '2020',
        },
        {
            id: uuidv4(),
            position: 'UI / UX Designer',
            company: 'Facebook',
            city: 'San Francisco',
            from: '2016',
            to: '2018',
        },
        {
            id: uuidv4(),
            position: 'Posición',
            company: 'Nombre de la empresa',
            city: 'Nombre de la ciudad',
            from: 'Desde',
            to: 'Hasta',
        },
    ],
    education: [
        {
            id: uuidv4(),
            universityName: 'Universidad Nacional de Lanús',
            city: 'Lanús',
            degree: 'Licenciatura',
            subject: 'Sistemas',
            from: '2008',
            to: '2015',
        },
        {
            id: uuidv4(),
            universityName: 'Universidad Nacional de Lanús',
            city: 'Lanús',
            degree: 'Abandonada',
            subject: 'Audiovisión',
            from: '2007',
            to: '2008',
        },
        {
            id: uuidv4(),
            universityName: 'Nombre de la universidad',
            city: 'Nombre de la ciudad',
            degree: 'Licenciatura/Ingeniería',
            subject: 'Carrera',
            from: 'Desde',
            to: 'Hasta',
        },
    ],
}

export default exampleCV;
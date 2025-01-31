import * as Yup from 'yup';

export default Yup.object({
    title: Yup.string().label('Title').min(2).max(256).required(),
    subtitle: Yup.string().label('Subtitle').min(2).max(256).required(),
    description: Yup.string().label('Description').min(2).max(1024).required(),
    phone: Yup.string().label('Phone Number').required()
        .matches(/^((\+972|0)([23489]|5[023456789])\-?\d{3}\-?\d{4})$/, 'Phone number must be valid'),
    email: Yup.string().label('Email').email().required().min(5).max(256),
    web: Yup.string().label('Website').url().min(14),
    image: Yup.object({
        url: Yup.string().label('Image URL').url().min(14).max(2048),
        alt: Yup.string().label('Image Alt Text').min(2).max(256),
    }),
    address: Yup.object({
        state: Yup.string().label('State').min(2).max(256),
        country: Yup.string().label('Country').required().min(2).max(256),
        city: Yup.string().label('City').required().min(2).max(256),
        street: Yup.string().label('Street').required().min(2).max(256),
        houseNumber: Yup.string().label('House Number').required().min(1).max(4),
        zip: Yup.string().required().label('ZIP Code').min(5).max(7),
    }),
});
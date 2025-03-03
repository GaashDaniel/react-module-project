import * as Yup from 'yup';

export default Yup.object({
    name: Yup.object({
        first: Yup.string().label('First Name').required().min(2).max(256),
        middle: Yup.string().label('Middle Name').min(2).max(256),
        last: Yup.string().label('Last Name').required().min(2).max(256),
    }),
    phone: Yup.string().label('Phone Number').required()
        .matches(/^((\+972|0)([23489]|5[023456789])\-?\d{3}\-?\d{4})$/, 'Phone number must be valid'),
    email: Yup.string().label('Email').email().required().min(5).max(256),
    password: Yup.string().label('Password').required().min(8).max(20)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{4,})(?=.*[!@%$#^&*\-_]).*$/,
            'Password must include uppercase, lowercase, 4 digits, and a special character'),
    confirmPassword: Yup.string().label('Confirm Password').required().oneOf([Yup.ref('password')], 'Passwords must match'),
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
        zip: Yup.string().label('ZIP Code').required().min(5).max(7),
    }),
    isBusiness: Yup.boolean().label('Business Account'),
});
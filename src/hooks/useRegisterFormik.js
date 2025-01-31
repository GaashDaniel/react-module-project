import { useFormik } from 'formik';
import registerValidationSchema from '../utils/registerValidationSchema';

const useRegisterFormik = (onSubmitCallback, initialValues = {}) => {
    return useFormik({
        initialValues: {
            name: {
                first: initialValues.name?.first || "",
                middle: initialValues.name?.middle || "",
                last: initialValues.name?.last || "",
            },
            phone: initialValues.phone || "",
            email: initialValues.email || "",
            password: initialValues.password || "",
            confirmPassword: initialValues.confirmPassword || "",
            image: {
                url: initialValues.image?.url || "",
                alt: initialValues.image?.alt || "",
            },
            address: {
                state: initialValues.address?.state || "",
                country: initialValues.address?.country || "",
                city: initialValues.address?.city || "",
                street: initialValues.address?.street || "",
                houseNumber: initialValues.address?.houseNumber || "",
                zip: initialValues.address?.zip || "",
            },
            isBusiness: initialValues.isBusiness || false,
        },
        validationSchema: registerValidationSchema,
        onSubmit: onSubmitCallback,
    });
};

export default useRegisterFormik;
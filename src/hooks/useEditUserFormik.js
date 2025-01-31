import { useFormik } from 'formik';
import editUserValidationSchema from '../utils/editUserValidationSchema';

const useEditUserFormik = (onSubmitCallback, initialValues = {}) => {
    return useFormik({
        initialValues: {
            name: {
                first: initialValues.name?.first,
                middle: initialValues.name?.middle,
                last: initialValues.name?.last,
            },
            phone: initialValues.phone,
            image: {
                url: initialValues.image?.url,
                alt: initialValues.image?.alt,
            },
            address: {
                state: initialValues.address?.state,
                country: initialValues.address?.country,
                city: initialValues.address?.city,
                street: initialValues.address?.street,
                houseNumber: initialValues.address?.houseNumber,
                zip: initialValues.address?.zip,
            },
        },
        validationSchema: editUserValidationSchema,
        enableReinitialize: true,
        onSubmit: onSubmitCallback,
    });
};

export default useEditUserFormik;
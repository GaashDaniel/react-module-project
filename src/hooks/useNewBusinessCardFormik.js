import { useFormik } from 'formik';
import businessCardValidationSchema from '../utils/businessCardValidationSchema';

const useBusinessCardFormik = (onSubmitCallback, initialValues = {}) => {
    return useFormik({
        initialValues: {
            title: initialValues.title || "",
            subtitle: initialValues.subtitle || "",
            description: initialValues.description || "",
            phone: initialValues.phone || "",
            email: initialValues.email || "",
            web: initialValues.web || "",
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
        },
        enableReinitialize: true,
        validationSchema: businessCardValidationSchema,
        onSubmit: onSubmitCallback,
    });
};

export default useBusinessCardFormik;
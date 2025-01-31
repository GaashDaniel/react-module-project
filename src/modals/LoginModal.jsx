import { Link, useNavigate } from 'react-router-dom';
import { useFormik, } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { registerFieldsConfig } from '../config/fieldsConfig';
import login from '../utils/login';
import BaseModal from "./BaseModal";
import DynamicField from '../components/DynamicField';

function LoginModal({ isOpen, setUser }) {

    const navigate = useNavigate();

    const formikSchema = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().required().min(8)
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{4,})(?=.*[!@%$#^&*\-_]).*$/, 'Password Must contain at least 1 uppercase letter, 1 lowercase letter, 4 digits and 1 special character (!@%$#^&*-_*)'),
        }),
        onSubmit: async ({ email, password }) => {
            const { error } = await login({ email, password, setUser });
            if (error) return toast.error(error);
            toast.success('Logged in successfully');
            navigate();
        },
    });

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors
    } = formikSchema;
    const disabled = !formikSchema.isValid || !formikSchema.dirty;

    const getNestedValue = (obj, path) => path.split('.').reduce((o, p) => o ? o[p] : '', obj);

    return (
        <BaseModal title={'Login'} isOpen={isOpen}>
            <Form noValidate onSubmit={handleSubmit}>
                <Row>
                    {[registerFieldsConfig[3], registerFieldsConfig[5]].map(({ label, type, name }) => (
                        <Col key={name} md={6}>
                            <DynamicField
                                type={type}
                                label={label}
                                name={name}
                                values={{ [name]: getNestedValue(values, name) }}
                                errors={{ [name]: getNestedValue(errors, name) }}
                                touched={{ [name]: getNestedValue(touched, name) }}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />
                        </Col>
                    ))}
                </Row>
                <Button type="submit" disabled={disabled}>Login</Button>
                <Link className='btn' to='#register'>Don't have an account? Register here</Link>
            </Form>
        </BaseModal>
    );
};

export default LoginModal;
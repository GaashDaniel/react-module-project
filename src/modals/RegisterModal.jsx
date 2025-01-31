import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { registerUser } from '../services/userCrud';
import { registerFieldsConfig } from "../config/fieldsConfig";
import login from '../utils/login';
import useRegisterFormik from '../hooks/useRegisterFormik';
import BaseModal from "./BaseModal";
import DynamicField from "../components/DynamicField";

function RegisterModal({ isOpen, setUser }) {
    const navigate = useNavigate();

    const onSubmitCallback = async (formValues) => {
        const { email, password } = formValues;
        delete formValues.confirmPassword;
        var { error } = await registerUser(formValues);
        if (error) return toast.error(error);
        var { error } = await login({ email, password, setUser });
        if (error) return toast.error(error);
        toast.success('Registered successfully');
        toast.success('Logged in successfully');
        navigate();
    };

    const formikSchema = useRegisterFormik((formValues) => onSubmitCallback(formValues));
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
        <BaseModal title="Register" isOpen={isOpen}>
            <Form noValidate onSubmit={handleSubmit}>
                <Row>
                    {registerFieldsConfig.slice(0, 3).map(({ label, type, name }) => (
                        <Col key={name} md={4}>
                            <DynamicField
                                label={label}
                                type={type}
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
                <Row>
                    {registerFieldsConfig.slice(3, 7).map(({ label, type, name }) => (
                        <Col key={name} md={6}>
                            <DynamicField
                                label={label}
                                type={type}
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
                <Row>
                    {registerFieldsConfig.slice(7, 9).map(({ label, type, name }) => (
                        <Col key={name} md={6}>
                            <DynamicField
                                label={label}
                                type={type}
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
                <Row>
                    {registerFieldsConfig.slice(9, 15).map(({ label, type, name }) => (
                        <Col key={name} md={4}>
                            <DynamicField
                                label={label}
                                type={type}
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
                <Row>
                    {registerFieldsConfig.slice(15, 16).map(({ label, type, name }) => (
                        <Col key={name}>
                            <DynamicField
                                label={label}
                                type={type}
                                name={name}
                                values={values}
                                errors={errors}
                                touched={touched}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />
                        </Col>
                    ))}
                </Row>
                <Button type="submit" disabled={disabled}>Register</Button>
            </Form>
        </BaseModal>
    );
};

export default RegisterModal;
import { Form, Button, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { registerFieldsConfig } from "../config/fieldsConfig";
import { updateUser } from '../services/userCrud';
import useEditUserFormik from '../hooks/useEditUserFormik';
import BaseModal from "./BaseModal";
import DynamicField from "../components/DynamicField";

function EditUserModal({ isOpen, onHide, user, setUser }) {

    const onSubmitCallback = async (formValues, actions) => {
        const { error, user: newUser } = await updateUser(formValues, user._id);
        if (error) return toast.error(error);
        newUser.loggedIn = true;
        localStorage.setItem('user', JSON.stringify(newUser));
        setUser(newUser);
        actions.resetForm();
        toast.success('Changes saved successfully');
        onHide();
    };

    const formikSchema = useEditUserFormik(onSubmitCallback, user);
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
        <BaseModal title="Edit Profile" isOpen={isOpen} onHide={onHide}>
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
                    {registerFieldsConfig.slice(4, 5).map(({ label, type, name }) => (
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
                <Button type="submit" disabled={disabled}>Save Changes</Button>
            </Form>
        </BaseModal>
    );
};

export default EditUserModal;
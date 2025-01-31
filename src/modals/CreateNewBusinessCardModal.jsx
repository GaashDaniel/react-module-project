import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { newBusinessCardFieldsConfig } from "../config/fieldsConfig";
import { createNewBusinessCard } from '../services/cardsCrud';
import useNewBusinessCardFormik from '../hooks/useNewBusinessCardFormik';
import BaseModal from "./BaseModal";
import DynamicField from "../components/DynamicField";


function CreateNewBusinessCardModal({ isOpen }) {
    const navigate = useNavigate();

    const onSubmitCallback = async (formValues) => {
        const { business, error } = await createNewBusinessCard(formValues);
        if (error) return toast.error(error);
        toast.success('Card created successfully');
        navigate(`/business/${business._id}`);
    };

    const formikSchema = useNewBusinessCardFormik(onSubmitCallback);
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
        <BaseModal title="Create New Business Card" isOpen={isOpen}>
            <Form noValidate onSubmit={handleSubmit}>
                <Row>
                    {newBusinessCardFieldsConfig.slice(0, 3).map(({ label, type, name }) => (
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
                    {newBusinessCardFieldsConfig.slice(3, 6).map(({ label, type, name }) => (
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
                    {newBusinessCardFieldsConfig.slice(6, 8).map(({ label, type, name }) => (
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
                    {newBusinessCardFieldsConfig.slice(8, 14).map(({ label, type, name }) => (
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
                <Button type="submit" disabled={disabled}>Create Card</Button>
            </Form>
        </BaseModal>
    );
};

export default CreateNewBusinessCardModal;
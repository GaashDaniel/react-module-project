import { Form, Button, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { newBusinessCardFieldsConfig } from "../config/fieldsConfig";
import { updateBusinessCard } from '../services/cardsCrud';
import useNewBusinessCardFormik from '../hooks/useNewBusinessCardFormik';
import BaseModal from "./BaseModal";
import DynamicField from "../components/DynamicField";

function EditBusinessCardModal({ isOpen, onHide, business, setBusiness }) {

    const onSubmitCallback = async (formValues) => {
        const { business: updatedBusiness, error } = await updateBusinessCard(business._id, formValues);
        if (error) return toast.error(error);
        setBusiness(updatedBusiness);
        toast.success('Business card updated successfully');
        onHide();
    };

    const formikSchema = useNewBusinessCardFormik(onSubmitCallback, business);
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
        <BaseModal title="Update Business Card" isOpen={isOpen} onHide={onHide}>
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
                <Button type="submit" disabled={disabled}>Update Card</Button>
            </Form>
        </BaseModal>
    );
};

export default EditBusinessCardModal;
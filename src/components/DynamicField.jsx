import Form from 'react-bootstrap/Form';

const DynamicField = ({ label, type, name, values, errors, touched, handleChange, handleBlur }) => (

    <Form.Group className="mb-3" controlId={`${name}`}>
        {type === 'checkbox' ? (
            <>
                <Form.Check
                    type={type}
                    label={label}
                    name={name}
                    checked={values[name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched[name] && errors[name]}
                />
            </>
        ) : (
            <>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                    type={type}
                    name={name}
                    value={values[name] || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched[name] && errors[name]}
                />
            </>
        )}
        <Form.Control.Feedback type="invalid">
            {errors[name]}
        </Form.Control.Feedback>
    </Form.Group>
);

export default DynamicField;
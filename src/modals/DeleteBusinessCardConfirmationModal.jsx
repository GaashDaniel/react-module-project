import { Form, Button, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { deleteBusinessCard } from '../services/cardsCrud';
import BaseModal from "./BaseModal";

function DeleteBusinessCardConfirmationModal({ isOpen, onHide, business, removeBusiness }) {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error } = await deleteBusinessCard(business._id);
        if (error) return toast.error(error);
        removeBusiness();
        toast.success('Business card deleted successfully');
        onHide();
    };

    return (
        <BaseModal title='Delete Business Card?' isOpen={isOpen} onHide={onHide}>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <p>Are you sure you want to delete this business card?</p>
                    <p>{business.title} #{business.bizNumber}</p>
                </Row>
                <Row>
                    <Col>
                        <Button className='btn-danger w-100' type='submit'>Delete</Button>
                    </Col>
                    <Col>
                        <Button className='btn-secondary w-100' onClick={onHide}>Cancel</Button>
                    </Col>
                </Row>
            </Form>
        </BaseModal>
    );
};

export default DeleteBusinessCardConfirmationModal;
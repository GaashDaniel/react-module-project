import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { deleteUser } from '../services/userCrud';
import logOut from '../utils/logOut';
import BaseModal from "./BaseModal";

function DeleteUserConfirmationModal({ isOpen, onHide, user, setUser }) {

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error } = await deleteUser(user._id);
        if (error) return toast.error(error);
        toast.success('User deleted successfully');
        logOut(event, setUser, navigate);
        onHide();
    };

    return (

        <BaseModal title='Delete User?' isOpen={isOpen} onHide={onHide}>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <p>Are you sure you want to delete your user?</p>
                    <p>{user.name.first} {user.name.middle} {user.name.last}</p>
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

export default DeleteUserConfirmationModal;
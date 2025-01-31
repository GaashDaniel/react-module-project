import { useLocation, useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/BaseModal.css';

function BaseModal({ isOpen, onHide, title, children }) {
    const location = useLocation();
    const navigate = useNavigate();
    onHide ||= () => navigate(`${location.pathname}${location.search}`);

    return (
        <Modal show={isOpen} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );
};

export default BaseModal;
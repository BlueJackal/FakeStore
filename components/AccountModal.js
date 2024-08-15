import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

export default function AccountModal({ show, onHide }) {
  const { user } = useAuth();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user?.username,
          currentPassword,
          newPassword,
        }),
      });

      if (!response.ok) {
        throw new Error('Password change failed');
      }

      setMessage('Password changed successfully');
      setCurrentPassword('');
      setNewPassword('');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Account Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {user ? (
          <>
            <h5>Username: {user.username}</h5>
            <Form onSubmit={handlePasswordChange}>
              <Form.Group controlId="currentPassword">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="newPassword" className="mt-3">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Change Password
              </Button>
            </Form>
            {message && <p className="mt-3">{message}</p>}
          </>
        ) : (
          <p>Loading user information...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
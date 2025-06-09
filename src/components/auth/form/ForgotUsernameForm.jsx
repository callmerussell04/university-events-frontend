import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import useForgotUsernameForm from '../hooks/ForgotUsernameHook';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AuthApiService from '../service/AuthApiService';


const ForgotUsernameForm = () => {
    const { 
        formData,
        validated,
        handleSubmit,
        handleChange,
    } = useForgotUsernameForm();
   
    const navigate = useNavigate();

    useEffect(() => {
        const user = AuthApiService.getCurrentUser();
        if (user) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <>
            <Form className="p-5 rounded" noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-2 position-relative" controlId='email'>
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control type='email' name='email' required
                        value={formData.email} onChange={handleChange} />
                </Form.Group>
                <Button className="w-100 fw-bold mt-3" variant='primary' type='submit'>Получить логин</Button>
            </Form>
        </>
    );
};

export default ForgotUsernameForm;
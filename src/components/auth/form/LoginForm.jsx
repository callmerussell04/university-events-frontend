import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import useLoginForm from '../hooks/LoginHook';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AuthApiService from '../service/AuthApiService';


const LoginForm = () => {
    const { 
        formData,
        validated,
        correctLoginInfo,
        mfaNeeded,
        handleSubmit,
        handleChange,
    } = useLoginForm();
    let wrongLoginInfoWarning;
    if (!correctLoginInfo) wrongLoginInfoWarning = (<p className='text-danger text-center mt-3'>Неверные логин или пароль</p>);
    
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = AuthApiService.getCurrentUser();
        if (user) {
            navigate("/");
        }
    }, [navigate]);

    if (!mfaNeeded)
        return (
            <>
                <Form className="p-5 rounded login-form" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className='mb-2 fw-bold' controlId='username'>
                        <Form.Label>Логин</Form.Label>
                        <Form.Control type='text' name='username' required
                            value={formData.username} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-2 position-relative" controlId='password'>
                        <Form.Label className="fw-bold">Пароль</Form.Label>
                        <Form.Control type={showPassword ? 'text' : 'password'} name='password' required
                            value={formData.password} onChange={handleChange} />
                            <input className='mt-2' type="checkbox" onClick={() => setShowPassword(!showPassword)} /> Показать пароль
                    </Form.Group>
                    <Button className="w-100 fw-bold mt-3" variant='primary' type='submit'>Войти</Button>
                    {wrongLoginInfoWarning}
                </Form>
            </>
        );
    else 
        return (
            <>
                <Form className="p-5 rounded login-form" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-2 position-relative" controlId='otp'>
                        <Form.Label className="fw-bold">Код потверждения</Form.Label>
                        <Form.Control type='text' name='otp' required
                            value={formData.otp} onChange={handleChange} />
                    </Form.Group>
                    <Button className="w-100 fw-bold mt-3" variant='primary' type='submit'>Войти</Button>
                    {wrongLoginInfoWarning}
                </Form>
            </>
        );
};
LoginForm.propTypes = {
    setNeedsRegistration: PropTypes.func
};

export default LoginForm;
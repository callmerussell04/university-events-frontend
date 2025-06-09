import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import useResetPasswordForm from '../hooks/ResetPasswordHook';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AuthApiService from '../service/AuthApiService';


const ResetPasswordForm = () => {
    const { 
        formData,
        validated,
        correctLoginInfo,
        emailNeeded,
        mfaNeeded,
        handleSubmit,
        handleChange,
    } = useResetPasswordForm();
    let wrongLoginInfoWarning;
    if (!correctLoginInfo) wrongLoginInfoWarning = (<p className='text-danger text-center mt-3'>Неверные данные</p>);
    
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = AuthApiService.getCurrentUser();
        if (user) {
            navigate("/");
        }
    }, [navigate]);

    if (emailNeeded)
        return (
            <>
                <Form className="p-5 rounded" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-2 position-relative" controlId='email'>
                        <Form.Label className="fw-bold">Email</Form.Label>
                        <Form.Control type='email' name='email' required
                            value={formData.email} onChange={handleChange} />
                    </Form.Group>
                    <Button className="w-100 fw-bold mt-3" variant='primary' type='submit'>Получить код</Button>
                    {wrongLoginInfoWarning}
                </Form>
            </>
        );
    else if (mfaNeeded)
        return (
            <>
                <Form className="p-5 rounded" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-2 position-relative" controlId='otp'>
                        <Form.Label className="fw-bold">Код потверждения</Form.Label>
                        <Form.Control type='text' name='otp' required
                            value={formData.otp} onChange={handleChange} />
                    </Form.Group>
                    <Button className="w-100 fw-bold mt-3" variant='primary' type='submit'>Проверить</Button>
                    {wrongLoginInfoWarning}
                </Form>
            </>
        );
    else 
        return (
            <>
                <Form className="p-5 rounded" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-2 position-relative" controlId='password'>
                        <Form.Label className="fw-bold">Пароль</Form.Label>
                        <Form.Control type={showPassword ? 'text' : 'password'} name='password' required
                            value={formData.password} onChange={handleChange} />
                            <input className='mt-2' type="checkbox" onClick={() => setShowPassword(!showPassword)} /> Показать пароль
                    </Form.Group>
                    <Form.Group className="mb-2 position-relative" controlId='passwordConfirm'>
                        <Form.Label className="fw-bold">Подтверждение пароля</Form.Label>
                        <Form.Control type={showPasswordConfirm ? 'text' : 'password'} name='passwordConfirm' required
                            value={formData.passwordConfirm} onChange={handleChange} />
                            <input className='mt-2' type="checkbox" onClick={() => setShowPasswordConfirm(!showPasswordConfirm)} /> Показать пароль
                    </Form.Group>
                    <Button className="w-100 fw-bold mt-3" variant='primary' type='submit'>Сохранить</Button>
                </Form>
            </>
        );;
};

export default ResetPasswordForm;
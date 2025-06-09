import { useState } from 'react';
import AuthApiService from '../service/AuthApiService';
import { useNavigate } from "react-router-dom";

const useResetPasswordForm = () => {
    const [validated, setValidated] = useState(false);
    const [correctLoginInfo, setCorrectLoginInfo] = useState(true);
    const [mfaNeeded, setMfaNeeded] = useState(false);
    const [emailNeeded, setEmailNeeded] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        otp: '',
        password: '',
        passwordConfirm: '',
    });
    const [resetToken, setResetToken] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() !== false && formData.password === formData.passwordConfirm) {
            try {
                if (emailNeeded) {
                    await AuthApiService.forgotPassword({email: formData.email});
                    setEmailNeeded(false);
                    setMfaNeeded(true);
                }
                else if(mfaNeeded) {
                    setResetToken(await AuthApiService.verifyOtpForReset({email: formData.email, otp: formData.otp}));
                    setMfaNeeded(false);
                } else {
                    await AuthApiService.resetPassword({resetToken: resetToken, newPassword: formData.password});
                    navigate("/login");
                }
            } catch (error) {
                setCorrectLoginInfo(false);
            }
        } else 
            setValidated(true);
    };

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFormData({
            ...formData,
            [inputName]: inputValue,
        });
    };

    return {
        formData,
        validated,
        correctLoginInfo,
        emailNeeded,
        mfaNeeded,
        handleSubmit,
        handleChange
    };
};

export default useResetPasswordForm;

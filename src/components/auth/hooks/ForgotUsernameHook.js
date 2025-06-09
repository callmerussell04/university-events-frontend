import { useState } from 'react';
import AuthApiService from '../service/AuthApiService';
import { useNavigate } from "react-router-dom";

const useForgotUsernameForm = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() !== false) {
            await AuthApiService.forgotUsername(formData);
            navigate("/login")
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
        handleSubmit,
        handleChange
    };
};

export default useForgotUsernameForm;

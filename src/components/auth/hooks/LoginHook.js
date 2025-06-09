import { useState } from 'react';
import AuthApiService from '../service/AuthApiService';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../AuthContext';

const useLoginForm = () => {
    const { setUser } = useAuth();
    const [validated, setValidated] = useState(false);
    const [correctLoginInfo, setCorrectLoginInfo] = useState(true);
    const [mfaNeeded, setMfaNeeded] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        otp: ''
    });
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() !== false) {
            try {
                const loggedInUser = await AuthApiService.login(formData);
                if (loggedInUser.mfaRequired !== null && !loggedInUser.mfaRequired){
                    setCorrectLoginInfo(true);
                    navigate("/");
                    setValidated(true);
                    setUser(loggedInUser);
                }
                else if(loggedInUser.mfaRequired !== null && loggedInUser.mfaRequired) {
                    setMfaNeeded(true);
                }
            } catch (error) {
                setCorrectLoginInfo(false);
            }
        } else 
            setValidated(true);
    };

    const logOut = () => {
        AuthApiService.logout();
        setValidated(false);
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
        mfaNeeded,
        handleSubmit,
        handleChange, 
        logOut
    };
};

export default useLoginForm;

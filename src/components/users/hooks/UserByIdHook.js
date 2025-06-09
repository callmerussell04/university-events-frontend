import { useEffect, useState } from 'react';
import UsersApiService from '../service/UsersApiService';

const useUser = (id) => {
    const emptyUser = {
        id: '',
        name: '',
        email: '',
        username: '',
        phoneNumber: '',
        role: '',
        groupId: ''
    };
    
    const [user, setUser] = useState({ ...emptyUser });

    const getUserById = async (userId = undefined) => {
        if (userId && userId > 0) {
            const data = await UsersApiService.get(userId);
            setUser(data);
        } else {
            setUser({ ...emptyUser });
        }
    };

    useEffect(() => {
        getUserById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return {
        user,
        setUser
    };
};

export default useUser;

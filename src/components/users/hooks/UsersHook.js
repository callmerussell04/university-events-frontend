import { useEffect, useState } from 'react';
import UsersApiService from '../service/UsersApiService';

const useUsers = ({ page, role, noPaging = false }) => {
    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [usersRefresh, setUsersRefresh] = useState(false);
    const handleUsersChange = () => setUsersRefresh(!usersRefresh);

    const getUsers = async () => {
        if (noPaging) {
            let expand = ``;
            if (role) expand = `?role=${role}`;
            const data = await UsersApiService.getAllNoPages(expand);
            setUsers(data ?? []);
        }
        else {
            let expand = `?`;
            if (page) expand = `${expand}page=${page}`;
            if (role) expand = `${expand}&role=${role}`;
            const data = await UsersApiService.getAll(expand);
            setUsers(data.items ?? []);
            setTotalPages(data.totalPages ?? 0);
        }
    };

    useEffect(() => {
        getUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [usersRefresh, page, role]);

    return {
        users,
        handleUsersChange,
        totalPages
    };
};

export default useUsers;

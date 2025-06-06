import { useEffect, useState } from 'react';
import GroupsApiService from '../service/GroupsApiService';

const useGroups = ({ page, noPaging = false }) => {
    const [groups, setGroups] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [groupsRefresh, setGroupsRefresh] = useState(false);
    const handleGroupsChange = () => setGroupsRefresh(!groupsRefresh);

    const getGroups = async () => {
        if (noPaging) {
            const data = await GroupsApiService.getAllNoPages();
            setGroups(data ?? []);
        }
        else {
            let expand = `?page=${page}`;
            const data = await GroupsApiService.getAll(expand);
            setGroups(data.items ?? []);
            setTotalPages(data.totalPages ?? 0);
        }
    };

    useEffect(() => {
        getGroups();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [groupsRefresh, page]);

    return {
        groups,
        handleGroupsChange,
        totalPages
    };
};

export default useGroups;

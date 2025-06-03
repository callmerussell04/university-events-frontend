import { useEffect, useState } from 'react';
import GroupsApiService from '../service/GroupsApiService';

const useGroups = () => {
    const [groups, setGroups] = useState([]);
    const [groupsRefresh, setGroupsRefresh] = useState(false);
    const handleGroupsChange = () => setGroupsRefresh(!groupsRefresh);

    const getGroups = async () => {
        const data = await GroupsApiService.getAll();
        setGroups(data.items ?? []);
    };

    useEffect(() => {
        getGroups();
    }, [groupsRefresh]);

    return {
        groups,
        handleGroupsChange
    };
};

export default useGroups;

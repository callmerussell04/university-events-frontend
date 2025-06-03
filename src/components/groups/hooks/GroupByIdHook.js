import { useEffect, useState } from 'react';
import GroupsApiService from '../service/GroupsApiService';

const useGroup = (id) => {
    const emptyGroup = {
        id: '',
        name: '',
        facultyId: ''
    };
    
    const [group, setGroup] = useState({ ...emptyGroup });

    const getGroupById = async (groupId = undefined) => {
        if (groupId && groupId > 0) {
            const data = await GroupsApiService.get(groupId);
            setGroup(data);
        } else {
            setGroup({ ...emptyGroup });
        }
    };

    useEffect(() => {
        getGroupById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return {
        group,
        setGroup
    };
};

export default useGroup;

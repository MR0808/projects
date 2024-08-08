import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const client = createClient({
    space: 'snh8kvy9ek2p',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'pzK0V1tomorP9cH8rVRM37PlMTQ51aUpHoTVpPJ6Yck'
});

export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const getData = async () => {
        try {
            const response = await client.getEntries({
                content_type: 'projects'
            });
            const items = response.items.map((item) => {
                const { title, url, image } = item.fields;
                const id = item.sys.id;
                const img = image?.fields?.file?.url;
                return { id, title, url, img };
            });
            setProjects(items);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return { loading, projects };
};

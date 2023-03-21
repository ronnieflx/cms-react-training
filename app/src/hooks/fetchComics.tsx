import { useState, useEffect } from 'react'
import md5 from 'md5'

type Comic = {
    id: number;
    title: string;
    thumbnail: Thumbnail,
    dates: Dates[],
    creators: {
        items: Creator[]
    },
    issueNumber: number
};

type Thumbnail = {
	path: string;
	extension: string;
}

type Creator = {
    name: string;
}

type Dates = {
    date: string,
    type: string
}

const fetchComics = () => {
    const [data, setData] = useState<Comic[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [serverError, setServerError] = useState<any>(null);

    const publicKey: string = "b5d9ffe549808a2ecf1308220437df56";
    const privateKey: string = "255629cb1927101c31702fd307aea39dcde49eb5";
    const ts: number = Date.now();
    const hash: string = md5(ts + privateKey + publicKey);
    const apiUrl: string = "https://gateway.marvel.com/v1/public/comics";

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const results: Comic[] = await fetch(
                    `${apiUrl}?apikey=${publicKey}&ts=${ts}&hash=${hash}`
                ).then(res => res.json()).then(res => res.data).then(res => res.results);

                setData(results);
                setIsLoading(false);
            } catch (error) {
                setServerError(error);
                setIsLoading(false);
            }
        };
    
        fetchData();
    }, []);

    return { isLoading, data, serverError };
};

export default fetchComics;
import { useState, useEffect } from 'react'
import md5 from 'md5'

const fetchMovies = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [data, setData] = useState(null);
    const [serverError, setServerError] = useState(null);

    const publicKey = "b5d9ffe549808a2ecf1308220437df56";
    const privateKey = "255629cb1927101c31702fd307aea39dcde49eb5";
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    const apiUrl = "https://gateway.marvel.com/v1/public/comics";

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const results = await fetch(
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

export default fetchMovies;
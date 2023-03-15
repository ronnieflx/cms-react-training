import { useState, useEffect } from 'react';
import { ComicProps } from '../types/types';

export const fetchComics = (apiUrl: string): {isLoading: boolean, data: ComicProps[], serverError: string | unknown, total: number} => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [data, setData] = useState<ComicProps[] | null>(null);
	const [serverError, setServerError] = useState<Error | null>(null);
	const [total, setTotal] = useState<number>(0);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const response = await fetch(apiUrl);
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const json = await response.json();
				setData(json.data.results);
				setTotal(json.data.total)
			} catch (error) {
				setServerError(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [apiUrl]);

	return { isLoading, data, serverError, total };
};

export default fetchComics;
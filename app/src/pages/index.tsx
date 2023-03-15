import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { favoritesContext } from '../context/favorites'
import Favorites from '../../components/Favorites'
import mainStyles from '../styles/Home.module.css'
import Comic from '../../components/Comic'
import fetchComics from '../hooks/fetchComics'
import { ComicProps, ComicProps as ComicType } from '../types/types';
import { Filters } from '../../components/Filters/Filters';
import md5 from 'md5';
import { Pagination } from '../../components/Pagination';
import { usePager } from '../hooks/Pager';
import Header from '../../components/Header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const getStaticProps: GetStaticProps = async() => {
	const ts: number = Date.now();
	const publicKey: string = "b5d9ffe549808a2ecf1308220437df56";
    const privateKey: string = "255629cb1927101c31702fd307aea39dcde49eb5";
	const hash: string = md5(ts + privateKey + publicKey);
	const requiredParameters = `ts=${ts}&apikey=${publicKey}&hash=${hash}`
	const limit = 15;

	let API_URL: string = `https://gateway.marvel.com/v1/public/comics?${requiredParameters}&limit=${limit}`
	return { props: { API_URL, requiredParameters, limit } }
}

export default function Home({ API_URL }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [query, setQuery] = useState<string>("");
    const [favorites, setFavorites] = useState<ComicProps[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [url, setUrl] = useState(`${API_URL}${query}`);

    //Grab favorited comics from local storage
	useEffect(() => {
		const favoriteComicsList = localStorage.getItem("Favorite_Comics");
		if (favoriteComicsList) {
			setFavorites(JSON.parse(favoriteComicsList));
		}
	}, []);


    //Update Query Function
    const updateQuery = (params: string) => {
		setCurrentPage(1);
		setQuery(params);
	};

    // Fetch and set pages
	const { isLoading, data, serverError, total } = fetchComics(url);
    const [offset, end, pageDisplay] = usePager(total, currentPage);

    // Pagination
    const prevPage = () => currentPage !== 1 && setCurrentPage(currentPage - 1);
	const nextPage = () => end !== total && setCurrentPage(currentPage + 1);

    useEffect(() => {
		setUrl(`${API_URL}&offset=${offset}&${query}`);
	}, [currentPage, query]);



    //favorites
    const contextValue = {
		favorites,
		setFavorites
	}

    return (
        <>
            <Head>
                <title>Final Project</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <favoritesContext.Provider value={contextValue}>
                <Header />
                <main className={mainStyles.main}>
                    
                    <Filters
                        isLoading={isLoading}
                        updateQuery={updateQuery}
                    />
                    
                    <div className={mainStyles.comic_container} >
                        <div className={mainStyles.comic_grid}>
                            { isLoading ? (
                                <span  className="loading"> Loading... <FontAwesomeIcon icon={faSpinner} style={{width: '14px'}} /> </span>
                            ) : serverError ? (
                                <span> Error fetching comics...</span>
                            ) : (
                                <>
                                    {data?.map((comic: ComicType) => (
                                        <Comic key={comic.id} comic={comic} />
                                    ))}
                                </>
                            )}
                        </div>
                        <div>
                        {!isLoading && (
                            <Pagination
                                prevPage={prevPage}
                                nextPage={nextPage}
                                display={`${pageDisplay}`}
                            />
                        )}
                        </div>
                    </div>

                    <div className={mainStyles.favorites_container}>
                        <div >
                            <Favorites handleCloseButtonClick={() => null} />
                        </div>
                    </div>
                </main>
            </favoritesContext.Provider>
        </>
    )
}
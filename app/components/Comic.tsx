import { useContext } from 'react'
import Image from 'next/image'
import Details from '../components/Details';
import Button from '../components/Button'
import styles from '../src/styles/Comics.module.css'
import { ComicProps } from '../src/types/types';
import { favoritesContext, favoritesContextType } from '../src/context/favorites'

interface Props {
	comic: ComicProps; 
}

const Comic = ({comic}: Props) => {    
    if(!comic) return null;

	const context = useContext<favoritesContextType>(favoritesContext)

	const isFavoritesFull: boolean = context.favorites.length >= 10;
	const isFavorite: ComicProps = context.favorites.find(favorite => favorite.id === comic.id);
	
	const thumbnailSrc = `${comic.thumbnail.path}.${comic.thumbnail.extension}`
	const altDescription = `${comic.title} issue:${comic.issueNumber} cover art`
    
    return (
        <div className={styles.comic}>
            <div className={styles.imgcont}>
                <Image
                    src={comic.thumbnail.path+"."+comic.thumbnail.extension}
                    fill
                    sizes="(min-width: 640px) 30vw, 35vw"
                    alt={comic.title + " - Poster"}
                />
                <Button 
                 comicData={comic}
                 isFavorite={isFavorite}
                 isFavoritesFull={isFavoritesFull}
                 />
            </div>
            <div className={styles.content_section}>
                <h3>
                    {comic.title}
                </h3>
                <Details dates={comic.dates} creators={comic.creators.items} issue={comic.issueNumber} />
            </div>
        </div>
    )
}

export default Comic;
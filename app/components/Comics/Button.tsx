import { useContext } from 'react'
import styles from '../../src/styles/Comics.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { ComicProps} from '../../src/types/types'
import { favoritesContext, favoritesContextType } from '../../src/context/favorites'

type buttonProps = {
	comicData: ComicProps;
	isFavorite: ComicProps;
	isFavoritesFull: boolean;
}

type addToFavorites = () => void
type removeFromFavorites = () => void;

export default function Button({ comicData, isFavorite, isFavoritesFull }: buttonProps) {

	const context = useContext<favoritesContextType>(favoritesContext)

	function addToFavorites(): addToFavorites {
		if(isFavoritesFull) return;

		context.setFavorites(prevFavorites => {
			const newFavorites: ComicProps[] = [...prevFavorites, {...comicData}]
           
			localStorage.setItem(
				"Favorite_Comics",
				JSON.stringify(newFavorites)
			);
			return newFavorites;
		});
	}

	function removeFromFavorites(): removeFromFavorites {
		context.setFavorites(prevFavorites => {
			const newFavorites: ComicProps[] = [...prevFavorites]
			const index: number = prevFavorites.findIndex(favorite => favorite.id === comicData.id);
			newFavorites.splice(index, 1);
			localStorage.setItem(
				"Favorite_Comics",
				JSON.stringify(newFavorites)
			);
			return newFavorites;
		});
		return;
	}
	
	return (
		<button
			className={`${styles.thunder} ${isFavorite && styles.selected} ${isFavoritesFull && !isFavorite && styles.disabled}`}
			onClick={!isFavorite ? addToFavorites : removeFromFavorites}
		>
			<FontAwesomeIcon icon={faBoltLightning} />
		</button>
	)
}
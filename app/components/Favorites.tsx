import { useContext, useState } from 'react'
import FavoritesItem from './FavoritesItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import styles from '../src/styles/Favorites.module.css'
import { favoritesContextType, favoritesContext } from '../src/context/favorites'

export default function Favorites() {
	const context = useContext<favoritesContextType>(favoritesContext)
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleToggle = (): void => {
		setIsActive(!isActive);
	};

	return (           
		<div className={`${styles.favoritesContainer} ${isActive ? styles.favoritesContainerActive : ''}`}>
			<div className={styles.inner}>
				<h3 className={styles.favoritesTitle}>Favorites</h3>
				<div className={styles.comicGrid}>
					{
						context.favorites.map((comic) => {
							return (
								<FavoritesItem 
									key={comic.id}
									id={comic.id}
									title={comic.title}
									issueNumber={comic.issueNumber}
									thumbnail={comic.thumbnail}
								/>
							)
						})
					}
				</div>
			</div>
			<button
				className={styles.closeButton}
				onClick={handleToggle}
			>
				Hide Favorites
				<FontAwesomeIcon icon={faBoltLightning} />
			</button>
		</div>
	)
}
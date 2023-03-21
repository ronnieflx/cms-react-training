import { useContext, useState } from 'react'
import FavoritesItem from './FavoritesItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import styles from '../../src/styles/Favorites.module.css'
import { favoritesContextType, favoritesContext } from '../../src/context/favorites'
import viewPortSize from '../../src/hooks/isMobile';

export default function Favorites() {
	const context = useContext<favoritesContextType>(favoritesContext)
	const [isActive, setIsActive] = useState<boolean>(false);
	const [isMobile] = viewPortSize();

	const handleToggle = (): void => {
		setIsActive(!isActive);
	};

	return (           
		<div className={`${styles.favoritesContainer} ${isActive ? styles.favoritesContainerActive : ''}`}>
			{isMobile &&
				<button className={styles.showFavorites} onClick={handleToggle}> {isActive ? "Hide": 'Show'} Favorites <FontAwesomeIcon icon={faBoltLightning} /> </button>
			}

			<div className={styles.inner}>
				<h3 className={styles.favoritesTitle}>Favorites</h3>
				<div className={styles.favoritesComics}>
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
				{isMobile &&
					<button
						className={styles.hideFavorites}
						onClick={handleToggle}
					>
						Hide Favorites
						<FontAwesomeIcon icon={faBoltLightning} />
					</button>
				}
			</div>
		</div>
	)
}
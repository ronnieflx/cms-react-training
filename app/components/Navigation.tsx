import { useState, useContext } from 'react'
import viewPortSize from '../src/hooks/isMobile';
import { favoritesContext, favoritesContextType } from '../src/context/favorites'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning, faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '../src/styles/Navigation.module.css'

export default function Navigation() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isMobile] = viewPortSize();
	const context = useContext<favoritesContextType>(favoritesContext)

	function toggleMenu(): void {
		setIsOpen(!isOpen);
	}

	return (
		<>
			{isMobile ? (
				<div className={styles.mobileNav}>
					<div className={styles.mobileFavorites}>
						<FontAwesomeIcon icon={faBoltLightning} />
						<span >({context.favorites.length})</span>
					</div>
					<button  onClick={toggleMenu}>
						<FontAwesomeIcon icon={faBars} />
					</button>
					<nav className={`${styles.dropdown} ${isOpen ? styles["dropdown-open"] : ""}`}>
						<a href="/" target="_blank" >Home</a>
						<a href="/" target="_blank" >Shop</a>
					</nav>
				</div>
			) : (
				<div className={styles.desktopNav}>
					<nav>
						<a href="/" target="_blank" >Home</a>
						<a href="/" target="_blank" >Shop</a>
					</nav>
					<div className={styles.desktopFavorites}>
						<FontAwesomeIcon icon={faBoltLightning} />
						My Favorites
						<span>({context.favorites.length})</span>
					</div>
				</div>
			)}
		</>
	)
}
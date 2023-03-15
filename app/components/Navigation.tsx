import { useState, useContext } from 'react'
import { favoritesContext, favoritesContextType } from '../src/context/favorites'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning, faBars } from '@fortawesome/free-solid-svg-icons'


export default function Navigation() {
	const [showNav, setShowNav] = useState<boolean>(false);
	const context = useContext<favoritesContextType>(favoritesContext)

	function toggleNav(): void {
		setShowNav(prev => !prev);
	}

	return (
		<div >
			<nav >
				<a href="" target="_blank" >Home</a>
				<a href="" target="_blank" >Shop</a>
			</nav>
			<div >
				<FontAwesomeIcon icon={faBoltLightning} />
				<span >My Favorites</span>
				<span >({context.favorites.length})</span>
			</div>
			<button  onClick={toggleNav}>
				<FontAwesomeIcon icon={faBars} />
			</button>
		</div>
	)
}
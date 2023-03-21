
import Image from 'next/legacy/image'
import Navigation from './Navigation'
import styles from '../src/styles/Header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<Image
					src='/logo.svg'
					alt='Comic Closet Logo'
					layout="responsive"
					width={106}
					height={106}
					loading='eager'
				/>
			</div>

			<Navigation />
		</header>
	)
}
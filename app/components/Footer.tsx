
import Image from 'next/legacy/image'
import styles from '../src/styles/Footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
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
				<nav>
					<ul>
						<li>
							<a href="/" target="_blank">Privacy Policy</a>
						</li>
						<li>
							<a href="/" target="_blank">Terms of Service</a>
						</li>
					</ul>
				</nav>
				<p className={styles.copyright}>Copyright 2022. Comic Closet, LLC. All rights reserved.</p>
			</div>
		</footer>
	)
}
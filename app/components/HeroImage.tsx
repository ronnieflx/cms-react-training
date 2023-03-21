import Image from 'next/legacy/image'
import styles from '../src/styles/HeroImage.module.css'

export default function HeroImage() {
	return (
		<section className={styles.heroImage}>
			<Image
				priority
				src='/hero.jpg'
				alt='Comic Closet Logo'
				layout="fill"
				objectFit="cover"
				objectPosition="center"	
			/>
		
			<div className={styles.contentSection}>
				<h2 className={styles.contentTitle}>
					Comic Closet
				</h2>
			</div>
		</section>
	)
}

import Image from 'next/image'
import Navigation from './Navigation'


export default function Header() {
	return (
		<header >
			{/* <div >
				<Image
					src='/logo.svg'
					alt='Comic Closet Logo'
					fill
					priority
				/>
			</div> */}

			<Navigation />
		</header>
	)
}
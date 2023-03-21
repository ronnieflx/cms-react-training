import styles from '../../src/styles/Comics.module.css'
import { DetailsProps, Dates, Creator } from '../../src/types/types';

const Details = ({dates, creators, issue}: DetailsProps) => {
	const date: Dates = dates.filter((date) => date.type === "onsaleDate")[0];
	const formattedDate: Date = new Date (date.date);
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

	return (
		<>
			<p><label>Issue: </label> {issue}</p>
			{formattedDate instanceof Date &&
				<p><label>Published: </label> {formattedDate.toLocaleDateString("en-US", options)}</p>
			}
			{creators.length !== 0 &&
				<>
					<label>Creators: </label>
					<ul className={styles.creators}>
						{creators.map((creator: Creator, i: number) => {
							return (
								< li key={creator.name}>
									{ creator.name }
								</li>
							)
						})}
					</ul>
				</>
			}
		</>
	)
}

export default Details;
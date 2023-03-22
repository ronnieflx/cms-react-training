import styles from '../src/styles/Home.module.css'

interface Props {
	issue: number;
	date: string | number | Date;
	creators: creator[];
}

interface creator {
	name: string;
}

const Details = ({ issue, date, creators }: Props) => {     
    const formattedDate: Date = new Date(date);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div className={styles.details}>
            {formattedDate != "Invalid Date" &&
                <p data-testid="detailDate">Published: {formattedDate.toLocaleDateString("en-US", options)}</p>
            }
            <p data-testid="detailIssue">Issue: {issue}</p>
            {creators.length != 0 &&
                <>
                    <h5>Creators: </h5>
                    <ul className={styles.creators} >
                        {creators.map((creator, i) => {
                            return (
                                <li key={creator.name} data-testid="detailCreator">
                                    { creator.name }
                                </li>
                            )
                        })}
                    </ul>
                </>
            }
        </div>
    )
}

export default Details;
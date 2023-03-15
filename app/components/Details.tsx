import styles from '../src/styles/Home.module.css'
import { DetailsProps } from '../src/types/types';

const Details = ({dates, creators, issue}: DetailsProps) => {
    let date = dates.filter(date => date.type === "onsaleDate")[0];

    let formattedDate = new Date (date.date);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <>
            <p><label>Issue: </label> {issue}</p>
            {formattedDate instanceof Date &&
                <p><label>Published: </label> {formattedDate.toLocaleDateString("en-US", options)}</p>
            }
            {creators.length != 0 &&
                <>
                    <label>Creators: </label>
                    <ul className={styles.creators}>
                        {creators.map((creator, i) => {
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
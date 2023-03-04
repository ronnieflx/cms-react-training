import { Fragment } from "react"
import styles from '@/styles/Home.module.css'

const Details = ({id, date, creators, issue}) => {     
    let formattedDate = new Date (date)
    let options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div className={styles.details}>
            {formattedDate != "Invalid Date" &&
                <p><label>Published: </label> {formattedDate.toLocaleDateString("en-US", options)}</p>
            }
            <p><label>Issue: </label> {issue}</p>
            {creators.length != 0 &&
                <>
                    <h5>Creators: </h5>
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
        </div>
    )
}

export default Details;
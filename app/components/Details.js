import { Fragment } from "react"
import styles from '@/styles/Home.module.css'

const Details = (props) => {     
    let date = new Date (props.date)
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    console.log(date)

    return (
        <div className={styles.details}>
            {date != "Invalid Date" &&
                <p><label>Published: </label> {date.toLocaleDateString("en-US", options)}</p>
            }

            {props.creators.length != 0 &&
                <p><label>Creators: </label> 
                    {props.creators.map((creator, i) => {
                        return (
                            <>
                                { ( i ? ', ' : '' ) + creator.name }
                            </>
                        )
                    })}
                </p>
            }

        </div>
    )

}

export default Details;
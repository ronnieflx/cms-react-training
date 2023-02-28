import { Fragment } from "react"
import styles from '@/styles/Home.module.css'

const Details = (props) => {     
    let date = new Date (props.date)
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    // let dateString = formattedDate.getMonth()+"/"+formattedDate.getDate()+"/"+formattedDate.getFullYear()

    return (
        <div className={styles.details}>
            <p><label>Published: </label> {date.toLocaleDateString("en-US", options)}</p>
            <p><label>Creators: </label> 
                {props.creators.map((creator, i) => {
                    return (
                        <>
                            {creator.name}{ (i ? ', ' : '') + i }
                        </>
                    )
                })}
            </p>
        </div>
    )

}

export default Details;
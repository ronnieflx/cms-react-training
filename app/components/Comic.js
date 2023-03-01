import Image from 'next/image'
import Details from 'components/Details';
import Button from 'components/Button'
import styles from '@/styles/Home.module.css'

const Comic = (props) => {       
    return (
        <div className={styles.card}>
            <div className={styles.imgcont}>
                <Image
                    src={props.thumbnail}
                    width={300}
                    height={300}
                    alt={props.title + " - Poster"}
                />
                <Button href={props.thumbnail} more_caption="More Info" />
            </div>
            <h3>
                {props.title}
            </h3>
            <Details date={props.date} creators={props.creators} />
            
        </div>
    )
}

export default Comic;

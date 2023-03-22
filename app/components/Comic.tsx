import Image from 'next/image'
import Details from '../components/Details';
import Button from '../components/Button'
import styles from '../src/styles/Home.module.css'

const Comic = ({comic}) => {       
    return (
        <div className={styles.card}>
            <div className={styles.imgcont}>
                <Image
                    src={comic.thumbnail.path+"."+comic.thumbnail.extension}
                    width={300}
                    height={300}
                    alt={comic.title + " - Poster"}
                    data-testid="thumb-path"
                />
                <Button  />
            </div>
            <h3 data-testid="title">
                {comic.title}
            </h3>
            <Details id={comic.id} date={comic.modified} creators={comic.creators.items} issue={comic.issueNumber} />
        </div>
    )
}

export default Comic;

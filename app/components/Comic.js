import Image from 'next/image'
import Details from 'components/Details';
import Button from 'components/Button'
import styles from '@/styles/Home.module.css'


const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
const Comic = ({movie}) => {       
    return (
        <div className={styles.card}>
            <div className={styles.imgcont}>
                <Image
                    loader={myLoader}
                    src={movie.thumbnail.path+"."+movie.thumbnail.extension}
                    width={300}
                    height={300}
                    alt={movie.title + " - Poster"}
                />
                <Button  />
            </div>
            <h3>
                {movie.title}
            </h3>
            <Details id={movie.id} date={movie.modified} creators={movie.creators.items} issue={movie.issueNumber} />
        </div>
    )
}

export default Comic;

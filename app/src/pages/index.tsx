import Head from 'next/head'
import Image from 'next/legacy/image'
import styles from '../../src/styles/Home.module.css'
import Comic from '../../components/Comic'
import fetchComics from '../hooks/fetchComics'

export default function Home() {
    const { isLoading, data, serverError } = fetchComics();

    return (
        <>
            <Head>
                <title>Exercise 3</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                
                <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
                <div className={styles.thirteen}>
                    <Image
                    src="/thirteen.svg"
                    alt="13"
                    width={40}
                    height={31}
                    priority
                    />
                </div>
                </div>
                <div className={styles.grid}>
                    <>
                        { isLoading ? (
                            <span> Loading...</span>
                        ) : serverError ? (
                            <span> Error fetching comics</span>
                        ) : (
                            <>
                                {data?.map((comic) => (
                                    <Comic key={comic.id} comic={comic} />
                                ))}
                            </>
                        )}

                    </>
                </div>
            </main>
        </>
    )
}
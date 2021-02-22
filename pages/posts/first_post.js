import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const FirstPost = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>this is FirstPost</h1>
            <h2>
                <Link href='/'>
                    <a>
                        Go back home.
                    </a>
                </Link>
            </h2> 
        </div>
    )
}

export default FirstPost;
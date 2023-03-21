
// import styles from '../styles/Comic.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Pager } from '../src/types/types';
import styles from '../src/styles/Pagination.module.css'

export const Pagination = ({ display, prevPage, nextPage }: Pager) => {
	return (
		<div className={styles.pagination}>
			<button onClick={() => prevPage()} className='prev'>
				<FontAwesomeIcon icon={faAngleLeft} />
			</button>
			<span>{display}</span>
			<button onClick={() => nextPage()} className='next'>
				<FontAwesomeIcon icon={faAngleRight} />
			</button>
		</div>
	);
};
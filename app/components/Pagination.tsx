
// import styles from '../styles/Comic.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Pager } from '../src/types/types';

export const Pagination = ({ display, prevPage, nextPage }: Pager) => {
	return (
		<div>
			<button onClick={() => prevPage()} className='prev'>
				<FontAwesomeIcon icon={faAngleLeft} style={{width: '10px'}}/>
			</button>
			<span>{display}</span>
			<button onClick={() => nextPage()} className='next'>
				<FontAwesomeIcon icon={faAngleRight} style={{width: '10px'}}/>
			</button>
		</div>
	);
};
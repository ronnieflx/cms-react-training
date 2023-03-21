import { useEffect, useState } from 'react';
import { Select } from './Select'
import { creators, characters } from './filterValues';
import { FilterProps } from '../../src/types/types';
import viewPortSize from '../../src/hooks/isMobile';
import styles from '../../src/styles/Filters.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

export const Filters = ({ updateQuery, isLoading }: FilterProps) => {
	const [character, setCharacter] = useState('');
	const [creator, setCreator] = useState('');
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isMobile] = viewPortSize();
	
	const updateParams = (filterType: string, selectedFilterVal: string) => {
		filterType === 'creator' ? setCreator(selectedFilterVal) : setCharacter(selectedFilterVal);
	};

	useEffect(() => {
		const query = `${character ? `&characters=${character}` : ''}${creator ? `&creators=${creator}` : ''}`;
		updateQuery(query);
	}, [character, creator]);


	function toggleFilter(): void {
		setIsOpen(!isOpen);
	}
	return (
		
		<div className={styles.filtersContainer}>
			{isMobile ? (
				<div className={styles.filtersMobile}>
					<button onClick={toggleFilter}>
						Filter <FontAwesomeIcon icon={faFilter} />
					</button>
					<div className={`${styles.filterDropdown} ${isOpen ? styles["filterDropdown-open"] : ""}`}>
						<Select
							isLoading={isLoading}
							updateParams={updateParams}
							filterObj={characters}
							filterType='character'
						/>
						<Select
							isLoading={isLoading}
							updateParams={updateParams}
							filterObj={creators}
							filterType='creator'
						/>
					</div>
				</div>
			) : (
				<div className={styles.filtersDesktop}>
					<span>
						Filter by:
					</span>
					
					<Select
						isLoading={isLoading}
						updateParams={updateParams}
						filterObj={characters}
						filterType='character'
					/>
					<Select
						isLoading={isLoading}
						updateParams={updateParams}
						filterObj={creators}
						filterType='creator'
					/>
				</div>
			)}
		</div>
	);
};
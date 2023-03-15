import { useEffect, useState } from 'react';
import { Select } from './Select'
import { creators, characters } from './filterProps';
import { FilterIndex } from '../../src/types/types';
import viewPortSize from '../../src/hooks/isMobile';
import styles from '../../src/styles/Filters.module.css'

export const Filters = ({ updateQuery, isLoading }: FilterIndex) => {
	const [character, setCharacter] = useState('');
	const [creator, setCreator] = useState('');
	
	const [isMobile] = viewPortSize();
	
	const updateParams = (filterType: string, selectedFilterVal: string) => {
		filterType === 'creator' ? setCreator(selectedFilterVal) : setCharacter(selectedFilterVal);
	};

	useEffect(() => {
		const query = `${character ? `&characters=${character}` : ''}${creator ? `&creators=${creator}` : ''}`;
		updateQuery(query);
	}, [character, creator]);

	return (
		
		<div className={styles.filters}>
			{isMobile ? (
				<span>
					Mobile Filters
				</span>
			) : (
				<span>
					Desktop Filters
				</span>
			)}
			
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
	);
};
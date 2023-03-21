import { useState, SyntheticEvent } from 'react';
import { FilterSelect } from '../../src/types/types';

export const Select = ({ updateParams, filterObj, filterType, isLoading }: FilterSelect) => {
	const [selected, setSelected] = useState('');

	const eventHandler = (e: SyntheticEvent<HTMLSelectElement>) => {
		const index = e.currentTarget.selectedIndex;
		const el = e.currentTarget.childNodes[index] as Element;
		const selectedId = el.getAttribute('id');

		setSelected(e.currentTarget.value);
		updateParams(filterType, selectedId);
	};

	return (
		<select
			value={selected}
			onChange={(e) => eventHandler(e)}>
			<option
				disabled={isLoading}
				key='0'>
				{filterType}
			</option>
			{filterObj.map((val) => (
				<option
					disabled={isLoading}
					key={val.id}
					id={JSON.stringify(val.id)}>
					{val.name}
				</option>
			))}
		</select>
	);
};
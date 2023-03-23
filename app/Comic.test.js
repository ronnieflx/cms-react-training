// title, issue number, published date, and creator names.

import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import Comic from '../app/components/Comic';
import Details from './components/Details';

afterEach(cleanup);

const comicProps = {
	comic: {
		title: 'Marvel Previews (2017)',
        thumbnail : {
            path : "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
            extension: "jpg"
        },
        creators : {
            items : [

            ]
        }
	}
};

const detailProps = {
	creators: [
		{
			name : "Jim Nausedas"
		}
    ],
	issue: 0,
	date: '2019-11-07T08:46:15-0500',
};

describe('<Comic>', () => {
	it('Title', ()=>{
		const { getByTestId } = render(<Comic {...comicProps} />);

		expect(getByTestId('title').textContent).toBe('Marvel Previews (2017)'); 
	});
});

describe('<Detail>', () => {

	it('Date & issue & creators', ()=>{
		const { getByTestId } = render(<Details {...detailProps} />);
		
		expect(getByTestId('detailDate').textContent).toBe('Published: November 7, 2019');
        expect(getByTestId('detailIssue').textContent).toBe('Issue: 0');
        expect(getByTestId('detailCreator').textContent).toBe('Jim Nausedas');
	})
});
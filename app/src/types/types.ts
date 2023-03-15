export interface FetchedResults {
    results: ComicProps[];
	resultCount: number;
}

export interface ComicProps {
    id: number;
    title: string;
    thumbnail: Thumbnail,
    dates: Dates[],
    creators: {
        items: Creator[]
    },
    issueNumber: string
}

export interface Thumbnail {
	path: string;
	extension: string;
}

export interface Creator {
    name: string;
}

export interface DetailsProps {
    dates: Dates[];
    creators: Creator[];
    issue: string;
}

export interface Dates {
    date: string,
    type: string
}

export interface FilterIndex {
	updateQuery: Function;
	isLoading: boolean;
}

export interface FilterDetail {
	updateParams: Function;
	filterObj: FilterTarget[];
	filterType: string;
	isLoading: boolean;
}

interface FilterTarget {
	id: number;
	name: string;
}

// Pagination
export interface Pager {
	display: string;
	prevPage: Function;
	nextPage: Function;
}



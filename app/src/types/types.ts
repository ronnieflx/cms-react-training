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
    issueNumber: number
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
    issue: number;
}

export interface Dates {
    date: string,
    type: string
}

export interface FilterProps {
	updateQuery: Function;
	isLoading: boolean;
}

export interface FilterSelect {
	updateParams: Function;
	filterObj: FilterTarget[];
	filterType: string;
	isLoading: boolean;
}

interface FilterTarget {
	id: number;
	name: string;
}


export interface Pager {
	display: string;
	prevPage: Function;
	nextPage: Function;
}
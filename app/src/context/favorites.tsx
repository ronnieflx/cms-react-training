import { createContext } from "react";
import { ComicProps } from '../types/types'

export type favoritesContextType = {
	favorites: ComicProps[];
	setFavorites: React.Dispatch<React.SetStateAction<ComicProps[]>>;
}

export const favoritesContext = createContext<favoritesContextType | null>(null);
export interface Movie {
    id: number,
    title: string,
    date: Date,
    description: string,
    duration: string,
    rating: number

    authors: Author[],
    genres: Genre[]
}

export interface Author {
    id: number,
    name: string,
    surname: string
}

export interface Genre {
    id: number,
    name: string
}


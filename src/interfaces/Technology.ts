export interface Technology{
    id: number,
    name: string,
    value: number,
    typeTechnology: TypeTechnology,
}

interface TypeTechnology{
    id: number,
    name: string
}
export const getPosterUrl = (posterPath:string):string => {
    const baseUrl = 'https://image.tmdb.org/t/p/w500'
    return `${baseUrl}${posterPath}`
}

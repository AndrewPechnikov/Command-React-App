const getMovies = async (category) => {
    const key = 'b3abe3f6a7fb23a499595ed6e1cbd087';
    const link = `https://api.themoviedb.org/3/movie/${category}?api_key=${key}&language=en-US&page=2}`;
    const response = await fetch(link);
    const data = await response.json();
    return data;
};

export default getMovies;

const getMovies = async (category) => {
    // const link = 'https://api.themoviedb.org/3/movie/?api_key=b3abe3f6a7fb23a499595ed6e1cbd087';
    const key = 'b3abe3f6a7fb23a499595ed6e1cbd087';
    const link = `https://api.themoviedb.org/3/movie/${category}?api_key=${key}&language=en-US&page=1}`;
    const response = await fetch(link);
    const data = await response.json();
    return data;
};

export default getMovies;


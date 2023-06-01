const getMovie = async (id) => {
    const link = `http://www.omdbapi.com/?i=${id}&apikey=aa99210f`;
    const response = await fetch(link);
    const data = await response.json();
    return data;
};

export default getMovie;

// const getMovie2 = async () => {
//     const link = 'https://api.themoviedb.org/3/movie/?api_key=b3abe3f6a7fb23a499595ed6e1cbd087';
//     const response = await fetch(link);
//     const data = await response.json();
//     console.log(data);
//     return data;
// };

// getMovie2();
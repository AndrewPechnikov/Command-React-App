const getMovie = async (id) => {
    const link = `http://www.omdbapi.com/?i=${id}&apikey=aa99210f`;
    const response = await fetch(link);
    const data = await response.json();
    return data;
};

export default getMovie;

// fetch('http://www.omdbapi.com/?t=avatar&apikey=aa99210f')
//         .then((response) => response.json())
//         .then((data) => {
//             setData(data);
//         })
//         .catch((err) => {
//             console.log(err.message);
//         });
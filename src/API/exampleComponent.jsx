import React, { useState, useEffect } from 'react';

const Example = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3030/movies')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setData(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);


	const listMovies = data.map(movie => <li>{movie.title}</li>)
	return (
		<ul>
			{listMovies}
		</ul>
	);
}

export default Example;

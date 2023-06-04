import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Example = () => {

	const [movies, setMovies] = useState(null);
	const page = "1"
	const key = "6c9d8cd2183423864f4c614f03dde5dd"
	const apiURLNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${page}}`
	const apiURLCommingSoon = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&${page}`

	const imgApi = "https://image.tmdb.org/t/p/w500/"
	useEffect(() => {
		axios.get(apiURLNowPlaying)
			.then(response => {
				console.log(response.data.results)
				setMovies(response.data.results)

			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return (
		< div >
			{movies && movies.map((movie, index) => {
				return <div key={index}><div >{movie.title}</div>
					<img src={imgApi + movie.poster_path} alt="" /></div>
			})}
		</div>
	);
}

export default Example;


//https://www.youtube.com/watch?time_continue=429&v=-6xXuSmBox4&embeds_referring_euri=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Duse%2Btmdb%2Bapi%26oq%3Duse%2Btmdb%2B%26gs_lcrp%3DEgZjaHJvbWUqCQgBEAAYExiABDIGCAAQRRg5MgkIARAAGBMYgAQyCggCEAAYEx&source_ve_path=MTM5MTE3LDEzOTExNywxMzkxMTcsMTM5MTE3LDM2ODQyLDEzOTExNywxMzkxMTcsMTM5MTE3LDEzOTExNywxMzkxMTcsMTM5MTE3LDEzOTExNywxMzkxMTcsMTM5MTE3LDI4NjY2&feature=emb_logo
// https://developer.themoviedb.org/docs
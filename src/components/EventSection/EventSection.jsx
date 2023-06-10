
import Wrapper from '../Wrapper/Wrapper';
import YearSlider from './YearSlider'
import EventFilmCard from './EventFilmCard'
import CinemaEventContext from './CinemaEventContext'
import { useState } from 'react';


const EventSection = () => {
	const [year, setYear] = useState(1)
	const handleYearChange = (year) => {
		setYear(year)
	}
	return (
		<>
			<YearSlider onChange={handleYearChange} />
			<EventFilmCard numberSlide={year} />
			<CinemaEventContext />
		</>

	)


};

export default EventSection;

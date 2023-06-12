export const goToNext = (activeCard, data, setActiveCard, setBackground, setTranslateXValue, imgApi, translateXValue) => {
	const isLastCard = activeCard === data.length - 1;
	const newIndex = isLastCard ? 0 : activeCard + 1;
	setActiveCard(newIndex);
	setBackground(`${imgApi}${data[newIndex].backdrop_path}`);
	setTranslateXValue(translateXValue - 110);

	if (isLastCard) {
		setTranslateXValue(954);
	}
};

export const goToPrevious = (activeCard, data, setActiveCard, setBackground, setTranslateXValue, imgApi, translateXValue) => {
	const isFirstCard = activeCard === 0;
	const newIndex = isFirstCard ? data.length - 1 : activeCard - 1;
	setActiveCard(newIndex);
	setBackground(`${imgApi}${data[newIndex].backdrop_path}`);
	setTranslateXValue(translateXValue + 110);

	if (isFirstCard) {
		setTranslateXValue(-874);
	}
};
import { useEffect, useState } from "react";

type QuestionType = {
	_id: string;
	question: string;
	option1: string;
	option2: string;
	option3: string;
	option4: string;
};

type QuestionState = QuestionType & {
	selectedOption: string | null;
	tempSelectedOption: string | null;
	isVisited: boolean;
	isMarkedForReview: boolean;
};

export const useTopicTest = (apiQuestions: QuestionType[]) => {
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const formatted = apiQuestions.map((q) => ({
			...q,
			selectedOption: null,
			tempSelectedOption: null,
			isVisited: false,
			isMarkedForReview: false,
		}));
		setQuestions(formatted);
	}, [apiQuestions]);

	const currentQuestion = questions[currentIndex];

	const selectOption = (option: string) => {
		const updated = [...questions];
		updated[currentIndex].tempSelectedOption = option;
		updated[currentIndex].isVisited = true;
		setQuestions(updated);
	};

	const handleSaveNext = () => {
		const updated = [...questions];

		updated[currentIndex].selectedOption =
			updated[currentIndex].tempSelectedOption;

		updated[currentIndex].isVisited = true;

		setQuestions(updated);

		if (currentIndex < questions.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const handlePrevious = () => {
		if (currentIndex > 0) {
			const prevIndex = currentIndex - 1;

			const updated = [...questions];
			updated[prevIndex].tempSelectedOption = updated[prevIndex].selectedOption;

			setQuestions(updated);
			setCurrentIndex(prevIndex);
		}
	};

	const handleMarkForLater = () => {
		const updated = [...questions];

		updated[currentIndex].isMarkedForReview = true;
		updated[currentIndex].selectedOption =
			updated[currentIndex].tempSelectedOption;

		updated[currentIndex].isVisited = true;

		setQuestions(updated);

		if (currentIndex < questions.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const goToQuestion = (index: number) => {
		const updated = [...questions];

		updated[index].tempSelectedOption = updated[index].selectedOption;

		updated[index].isVisited = true;

		setQuestions(updated);
		setCurrentIndex(index);
	};

	const counts = {
		attempted: questions.filter((q) => q.selectedOption).length,
		marked: questions.filter((q) => q.isMarkedForReview).length,
		notAttempted: questions.filter((q) => q.isVisited && !q.selectedOption)
			.length,
		notVisited: questions.filter((q) => !q.isVisited).length,
	};

	const getSubmitPayload = () => {
		return questions.map((q) => ({
			questionId: q._id,
			selectedOption: q.selectedOption,
		}));
	};

	return {
		questions,
		currentQuestion,
		currentIndex,
		selectOption,
		handleSaveNext,
		handlePrevious,
		handleMarkForLater,
		counts,
		getSubmitPayload,
		goToQuestion,
	};
};

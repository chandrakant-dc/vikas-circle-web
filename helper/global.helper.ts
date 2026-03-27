export const formatTime = (totalSeconds: number) => {
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	return { hours, minutes, seconds };
};

export function formatNumber(num: number): string {
	return Number.isInteger(num) ? num.toString() : num.toFixed(2);
}

export function minutesToSeconds(minutes: number) {
	if (typeof minutes !== "number" || minutes < 0) {
		throw new Error("Input must be a non-negative number");
	}
	return minutes * 60;
}

export function getPercentage(part: number, total: number) {
	if (typeof part !== "number" || typeof total !== "number") {
		throw new Error(
			"Both part and total must be numbers, and total must not be zero",
		);
	}
	return (part / total) * 100;
}

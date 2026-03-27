export default function ActiveDotIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			fill="none"
			viewBox="0 0 32 32"
		>
			<title>Active</title>
			<g filter="url(#filter0_d_81_3217)">
				<circle
					cx="16"
					cy="16"
					r="5"
					fill="url(#paint0_linear_81_3217)"
				></circle>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_81_3217"
					x1="11"
					x2="21"
					y1="16"
					y2="16"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#4F29ED"></stop>
					<stop offset="1" stopColor="#9D00FF"></stop>
				</linearGradient>
				<filter
					id="filter0_d_81_3217"
					width="32"
					height="32"
					x="0"
					y="0"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
					<feColorMatrix
						in="SourceAlpha"
						result="hardAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					></feColorMatrix>
					<feMorphology
						in="SourceAlpha"
						operator="dilate"
						radius="1"
						result="effect1_dropShadow_81_3217"
					></feMorphology>
					<feOffset></feOffset>
					<feGaussianBlur stdDeviation="5"></feGaussianBlur>
					<feComposite in2="hardAlpha" operator="out"></feComposite>
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
					<feBlend
						in2="BackgroundImageFix"
						result="effect1_dropShadow_81_3217"
					></feBlend>
					<feBlend
						in="SourceGraphic"
						in2="effect1_dropShadow_81_3217"
						result="shape"
					></feBlend>
				</filter>
			</defs>
		</svg>
	);
}

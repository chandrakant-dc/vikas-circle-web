import { Input } from "@heroui/react";
import CloseEyeIcon from "@src/svg/CloseEyeIcon";
import OpenEyeIcon from "@src/svg/OpenEyeIcon";
import React from "react";

type PasswordFieldProps = React.ComponentProps<typeof Input>;

const PasswordField: React.FC<PasswordFieldProps> = (props) => {
	const [isVisible, setIsVisible] = React.useState(false);

	const toggleVisibility = () => setIsVisible((prev) => !prev);

	return (
		<Input
			{...props}
			type={isVisible ? "text" : "password"}
			endContent={
				<button
					aria-label="toggle password visibility"
					className="focus:outline-none outline-transparent cursor-pointer"
					type="button"
					onClick={toggleVisibility}
				>
					{isVisible ? <OpenEyeIcon /> : <CloseEyeIcon />}
				</button>
			}
		/>
	);
};

export default PasswordField;

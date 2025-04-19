import "./Button.css";

export default function Button(props: Readonly<ButtonProps>) {
	return (
		<button className="buttonClass" onClick={props.onClick}>
			{props.buttonText}
		</button>
	);
}

export type ButtonProps = {
	buttonText: string;
	onClick: () => void;
};

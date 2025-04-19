import { useState } from "react";
import Button from "../../components/button/button";
import Header from "./Header/Header";
import "./InitiativeScreen.css";

export default function InitiativeScreen() {
	const [playerModal, setPlayerModal] = useState(false);
	const [npcModal, setNpcModal] = useState(false);

	const togglePlayerModal = () => {
		setPlayerModal((prev) => !prev);
	};

	const toggleNpcModal = () => {
		setNpcModal((prev) => !prev);
	};

	return (
		<div>
			<Header />
			<div className="buttonsWrapper">
				<Button buttonText="Add Players" onClick={togglePlayerModal} />
				<Button buttonText="Add Npcs" onClick={toggleNpcModal} />
			</div>
		</div>
	);
}

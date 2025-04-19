import { useState } from "react";
import Button from "../../components/button/Button";
import Header from "./Header/Header";
import "./InitiativeScreen.css";
import Grid from "../../components/grid/Grid";

export default function InitiativeScreen() {
	const [playerModal, setPlayerModal] = useState(false);
	const [npcModal, setNpcModal] = useState(false);
	const [players, setPlayers] = useState([]);
	console.log(playerModal, npcModal);

	const togglePlayerModal = () => {
		setPlayers([]);
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
			<div>
				<Grid data={players} columnConfiguration={[]} />
			</div>
		</div>
	);
}

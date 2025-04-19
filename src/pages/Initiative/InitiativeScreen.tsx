import { useState } from "react";
import Button from "../../components/button/Button";
import Header from "./Header/Header";
import "./InitiativeScreen.css";
import Grid from "../../components/grid/Grid";
import { playerColumnConfiguration, PlayerType } from "./Player/PlayerType";

const player: PlayerType[] = [
	{
		id: "1",
		order: 1,
		name: "Player 1",
		initiative: 10,
		ac: 15,
	},
];

export default function InitiativeScreen() {
	const [playerModal, setPlayerModal] = useState(false);
	const [npcModal, setNpcModal] = useState(false);
	const [players, setPlayers] = useState<PlayerType[]>(player);
	console.log(playerModal, npcModal);

	const togglePlayerModal = () => {
		setPlayers(player);
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
			<div className="gridWrapper">
				<Grid data={players} columnConfiguration={playerColumnConfiguration} />
			</div>
		</div>
	);
}

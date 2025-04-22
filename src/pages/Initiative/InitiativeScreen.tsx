import { useState } from "react";
import Button from "../../components/button/Button";
import Header from "./Header/Header";
import "./InitiativeScreen.css";
import Grid from "../../components/grid/Grid";
import { viewPlayerColumnConfiguration, PlayerType } from "./Player/PlayerType";
import PlayerModal from "./Player/PlayerModal";
import NpcModal from "./NPC/NpcModal";

const player: PlayerType[] = [
	{
		order: 1,
		name: "Player 1",
		initiative: 10,
		ac: 15,
	},
	{
		order: 1,
		name: "Player 2",
		initiative: 12,
		ac: 10,
	},
];

export default function InitiativeScreen() {
	const [players, setPlayers] = useState<PlayerType[]>([]);
	const [playerModal, setPlayerModal] = useState(false);
	const [npcModal, setNpcModal] = useState(false);

	const togglePlayerModal = () => {
		// setPlayers(player);
		setPlayerModal((prev) => !prev);
	};

	const toggleNpcModal = () => {
		setNpcModal((prev) => !prev);
	};

	return (
		<div>
			<Header />
			<div className="buttonsWrapper">
				<Button buttonText="Manage Players" onClick={togglePlayerModal} />
				<Button buttonText="Add Npcs" onClick={toggleNpcModal} />
			</div>
			<div className="gridWrapper">
				<Grid data={players} columnConfiguration={viewPlayerColumnConfiguration} />
			</div>
			<PlayerModal isVisible={playerModal} onClose={togglePlayerModal} players={players} setPlayers={setPlayers}/>
			<NpcModal isVisible={npcModal} onClose={toggleNpcModal}/>
		</div>
	);
}

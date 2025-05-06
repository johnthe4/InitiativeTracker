import { useState } from "react";
import Button from "../../components/button/Button";
import Header from "./Header/Header";
import "./InitiativeScreen.css";
import Grid from "../../components/grid/Grid";
import { viewPlayerColumnConfiguration, PlayerType } from "./Player/PlayerType";
import ManagePlayers from "./Player/ManagePlayers";
import NpcModal from "./NPC/NpcModal";

export default function InitiativeScreen() {
	const [players, setPlayers] = useState<PlayerType[]>([]);
	const [npcModal, setNpcModal] = useState(false);

	const toggleNpcModal = () => {
		setNpcModal((prev) => !prev);
	};

	return (
		<div>
			<Header />
			<div className="buttonsWrapper">
				<ManagePlayers players={players} setPlayers={setPlayers} />
				<Button buttonText="Add Npcs" onClick={toggleNpcModal} />
			</div>
			<div className="gridWrapper">
				<Grid
					data={players}
					columnConfiguration={viewPlayerColumnConfiguration}
				/>
			</div>
			<NpcModal isVisible={npcModal} onClose={toggleNpcModal} />
		</div>
	);
}

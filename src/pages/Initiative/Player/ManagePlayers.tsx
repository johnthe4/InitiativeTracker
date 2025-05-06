import Grid from "../../../components/grid/Grid";
import Modal from "../../../components/modal/Modal";
import { editPlayerColumnConfiguration, PlayerType } from "./PlayerType";
import "./ManagePlayers.css";
import { useCallback, useState, useEffect } from "react";
import Button from "../../../components/button/Button";

interface ManagePlayersProps {
	players: PlayerType[];
	setPlayers: (players: PlayerType[]) => void;
}

export default function ManagePlayers({
	players,
	setPlayers,
}: Readonly<ManagePlayersProps>) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [tempPlayers, setTempPlayers] = useState<PlayerType[]>(players);
	const [newPlayer, setNewPlayer] = useState<PlayerType | null>();

	const handleChange = useCallback(
		(rowIndex: number, columnKey: string, value: string) => {
			if (rowIndex === tempPlayers.length) {
				// Update the new row
				setNewPlayer((prevNewRow) => ({
					...prevNewRow,
					[columnKey]: value,
				}));
			} else {
				setTempPlayers((prevData: PlayerType[]) => {
					const updatedData = [...prevData];
					updatedData[rowIndex] = {
						...updatedData[rowIndex],
						[columnKey]: value,
					};
					return updatedData;
				});
			}
		},
		[tempPlayers.length, setNewPlayer, setTempPlayers]
	);

	const addNewRow = useCallback(() => {
		if (newPlayer) {
			setTempPlayers((prevData) => [...prevData, newPlayer]);
			setNewPlayer(null); // Reset the new row
		}
	}, [newPlayer]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Enter") {
				addNewRow();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [addNewRow]);

	const handleToggleModal = () => {
		setIsModalVisible((prev) => !prev);
	};

	const onModalClose = () => {
		setPlayers(tempPlayers); // Update the players state with the modified data
		handleToggleModal(); // Close the modal
	};

	return (
		<>
			<Button buttonText="Manage Players" onClick={handleToggleModal} />
			<Modal
				isVisible={isModalVisible}
				title="Manage Players"
				onClose={onModalClose}
				className="player-modal-content" // Pass custom class
			>
				<Grid
					data={tempPlayers}
					newData={newPlayer} // Pass the new player data
					addNewRow={addNewRow} // Pass the function to add a new row
					columnConfiguration={editPlayerColumnConfiguration}
					isEditable={true}
					handleChange={handleChange} // Pass handleChange function
				/>
			</Modal>
		</>
	);
}

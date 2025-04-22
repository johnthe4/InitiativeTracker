import Grid from "../../../components/grid/Grid";
import Modal from "../../../components/modal/Modal";
import { editPlayerColumnConfiguration, PlayerType } from "./PlayerType";
import "./PlayerModal.css";
import { useCallback, useState } from "react";

interface PlayerModalProps {
    isVisible: boolean;
    players: PlayerType[];
    setPlayers: (players: PlayerType[]) => void;
    onClose: () => void;
}

export default function PlayerModal({isVisible, onClose, players, setPlayers}: PlayerModalProps) {
    const [tempPlayers, setTempPlayers] = useState<PlayerType[]>(players);
    const [newPlayer, setNewPlayer] = useState<PlayerType | null>();
    
	const handleChange = useCallback((rowIndex: number, columnKey: string, value: string) => {
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
	},[tempPlayers.length, setNewPlayer, setTempPlayers]);

    const addNewRow = () => {
        if (newPlayer) {
            setTempPlayers((prevData) => [...prevData, newPlayer]);
            setNewPlayer(null); // Reset the new row
        }
    };
    
    const onModalClose = () => {
        setPlayers(tempPlayers); // Update the players state with the modified data
        onClose(); // Close the modal
    }

    return (
        <Modal 
            isVisible={isVisible} 
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
    )
}

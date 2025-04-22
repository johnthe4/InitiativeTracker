import Modal from "../../../components/modal/Modal";

interface NpcModalProps {
    isVisible: boolean;
    onClose: () => void;
}

export default function NpcModal({isVisible, onClose}: NpcModalProps) {
    return (
        <div>
            <Modal isVisible={isVisible} title="Manage NPCs" onClose={onClose}>
                HI
            </Modal>
        </div>
    )
}

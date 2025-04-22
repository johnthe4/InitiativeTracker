import { ReactNode } from 'react';
import './Modal.css';

interface ModalProps {
    isVisible: boolean;
    title: string;
    children: ReactNode;
    onClose: () => void;
    className?: string; // Add className prop
}

export default function Modal({ isVisible, title, children, onClose, className }: ModalProps) {
    if (!isVisible) return null;

    return (
        <div className="modal-overlay">
            <div className={`modal-content ${className || ''}`}> {/* Apply className */}
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="modal-close" onClick={onClose}>x</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './TrailerModal.css';

const TrailerModal = ({ isOpen, onClose, trailerUrl }) => {
    if (!isOpen) return null;

    // Đóng modal khi click ra ngoài vùng video
    const handleBackdropClick = (e) => {
        if (e.target.className === 'modal-backdrop') {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content-wrapper">
                <button className="btn-close-modal" onClick={onClose}>
                    <FaTimes />
                </button>

                <div className="video-responsive">
                    <iframe
                        src={trailerUrl}
                        title="Movie Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default TrailerModal;
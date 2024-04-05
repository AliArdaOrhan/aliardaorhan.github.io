import React, { ReactNode } from "react";
import { FaBan } from "react-icons/fa";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    // Container
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      {/* Modal */}
      <div className="bg-white p-6 rounded-lg shadow-md min-w-[500px]">
        {/* Header */}
        <div className="flex justify-between text-center align-middle mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <span className="flex items-center">
            <FaBan
              data-testid="modal-close-button"
              className="cursor-pointer text-gray-500 hover:text-gray-800"
              onClick={onClose}
            />
          </span>
        </div>
        <div> {children} </div>
      </div>
    </div>
  );
};

export default Modal;

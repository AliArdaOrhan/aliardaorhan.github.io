import React, { useState } from "react";
import Modal, { ModalProps } from "../modal/Modal";

interface NewTILModalProps extends ModalProps {
  title: string;
  content: string;
}

const NewTILModal: React.FC<NewTILModalProps> = ({
  title,
  content,
  ...modalProps
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    // You can access the newTitle and newContent values here
  };

  return (
    <Modal title={title} {...modalProps}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={newTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={newContent}
            onChange={handleContentChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default NewTILModal;

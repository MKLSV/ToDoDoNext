import React from "react";

function ConfirmDeleteModal({ onConfirm, onCancel, text }) {
  return (
    <div className="task-modal">
      <div className="modal">
        <p>Вы уверены, что хотите удалить задачу '{text}'?</p>
        <div className="btns">
          <button className="delete-btn" onClick={onConfirm}>Удалить</button>
          <button onClick={onCancel}>Отменить</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;

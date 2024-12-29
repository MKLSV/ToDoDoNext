import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

import ConfirmDeleteModal from "./DeleteModal";
import { saveTodo } from "../store/todo/todo.action";

import EditTask from "./EditTask";
import TaskModal from "./TaskModal";

export function TodoItem({ todo, onRemoveTodo, onUpdateTodo, setShowConfetti }) {
  const [isEditing, setIsEditing] = useState(false)
  const [onDelete, setOnDelete] = useState(false)
  const [onModal, setOnModal] = useState(false)

  function handleDelete() {
    onRemoveTodo(todo._id)
    setOnDelete(false)
  };
  function handleChecked() {
    if (todo.repeat) {
      const currentDate = new Date(todo.dueDate);
      const day = currentDate.getDate();
      const nextMonth = currentDate.getMonth() + 1; // Следующий месяц
      const nextMonthDate = new Date(currentDate.getFullYear(), nextMonth, day);
      const nextMonthMillis = nextMonthDate.getTime();

      const nextTodo = { ...todo, dueDate: nextMonthMillis }
      delete nextTodo._id
      
      saveTodo(nextTodo)
    }
    saveTodo({ ...todo, isCompleted: true, completedAt: Date.now() })
    setShowConfetti(true)
    setOnModal(false)
  };


  return (
    <div>
      {onModal ? <TaskModal handleChecked={handleChecked} setOnModal={setOnModal} todo={todo} /> : ''}
      {isEditing ? <EditTask task={todo} setIsEditing={setIsEditing} onUpdateTodo={onUpdateTodo} />
        : (
          <div className="todo-item" onClick={() => setOnModal(true)} >
            <div className="todo-container">
              <span >{todo.text}</span>
              <div className="btns">
                <FaRegEdit
                  onClick={(e) => {
                    e.stopPropagation(); // Предотвращает клик по .todo-item
                    setIsEditing(true);
                  }}
                />
                <TiDeleteOutline
                  onClick={(e) => {
                    e.stopPropagation(); // Предотвращает клик по .todo-item
                    setOnDelete(true);
                  }}
                />
              </div>
            </div>
          </div>
        )}

      {onDelete && (
        <ConfirmDeleteModal
          onConfirm={handleDelete}
          onCancel={() => setOnDelete(false)}
          text={todo.text}
        />
      )}
    </div>
  );
}


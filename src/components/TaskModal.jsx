
export default function TaskModal({ setOnModal, todo, handleChecked }) {

    function formatToDayMonth(milliseconds) {
        const date = new Date(milliseconds);
        const day = date.getDate(); // Получаем день
        const monthNames = [
            "января", "февраля", "марта", "апреля", "мая",
            "июня", "июля", "августа", "сентября", "октября",
            "ноября", "декабря"
        ];
        const month = monthNames[date.getMonth()]; // Получаем название месяца

        return `${day} ${month}`;
    }
    return (
        <div className="task-modal" onClick={() => setOnModal(false)}>
            <form className="add-task-form" onClick={(e) => e.stopPropagation()} onSubmit={(e) => {
                e.preventDefault(); // Предотвращает обновление страницы
                handleChecked(); // Ваша логика обработки данных
            }}>
                <h2 className="add-task-title">{todo.title}</h2>

                <div className="form-group">
                    <label htmlFor="owner">Чья задача:</label>
                    <span>{todo.owner}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="type">Тип задачи:</label>
                    <span>{todo.type}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="text">Сообщение:</label>
                    <span>{todo.text}</span>
                </div>


                {todo.dueDate && (
                    <div className="form-group">
                        <label htmlFor="dueDate">Выполнить до:</label>
                        <span>{formatToDayMonth(todo.dueDate)}</span>
                    </div>
                )}

                {todo.completedAt && (
                    <div className="form-group">
                        <label htmlFor="dueDate">Выполннено:</label>
                        <span>{formatToDayMonth(todo.dueDate)}</span>
                    </div>
                )}

                {todo.dueDate && (
                    <div className="form-group">
                        <label htmlFor="repeat">
                            Повторять:
                        </label>
                        <span>{todo.repeat ? ' Да' : 'Нет'}</span>
                    </div>
                )}

                <button type="submit" className="submit-button">
                    Выполнено
                </button>
            </form>
        </div>
    );
};


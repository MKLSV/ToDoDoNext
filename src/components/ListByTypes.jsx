import { TodoItem } from "./TodoItem"

export function ListByTypes({ todos, onRemoveTodo, onUpdateTodo, setShowConfetti }) {

    const todoList = todos.filter(todo => (
        todo.type === 'задача'
    ))
    const expensesList = todos.filter(todo => (
        todo.type === 'постоянный расход'
    ))
    const shoppingList = todos.filter(todo => (
        todo.type === 'покупки'
    ))
    const remontList = todos.filter(todo => (
        todo.type === 'ремонт'
    ))
    const stuproList = todos.filter(todo => (
        todo.type === 'ступро'
    ))

    return <div className="todo-list">

        {todoList.length ?
            <div className="type-container">
                <span className="title">Задачи</span>
                {todoList.map(todo => (
                    <div className={todo.isCompleted ? 'todo done' : 'todo'} key={todo._id}>
                        <TodoItem todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} setShowConfetti={setShowConfetti} />
                    </div>
                ))}
            </div>
            : ''}

        {expensesList.length ?
            <div className="type-container">
                <span className="title">Регулярные платежи</span>
                {expensesList.map(todo => (
                    <div className={todo.isCompleted ? 'todo done' : 'todo'} key={todo._id}>
                        <TodoItem todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} setShowConfetti={setShowConfetti} />
                    </div>
                ))}
            </div>
            : ''}
        {shoppingList.length ?
            <div className="type-container">
                <span className="title">Покупки</span>
                {shoppingList.map(todo => (
                    <div className={todo.isCompleted ? 'todo done' : 'todo'} key={todo._id}>
                        <TodoItem todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} setShowConfetti={setShowConfetti} />
                    </div>
                ))}
            </div>
            : ''}
        {remontList.length ?
            <div className="type-container">
                <span className="title">Ремонт</span>
                {remontList.map(todo => (
                    <div className={todo.isCompleted ? 'todo done' : 'todo'} key={todo._id}>
                        <TodoItem todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} setShowConfetti={setShowConfetti} />
                    </div>
                ))}
            </div>
            : ''}
        {stuproList.length ?
            <div className="type-container">
                <span className="title">Ступро</span>
                {stuproList.map(todo => (
                    <div className={todo.isCompleted ? 'todo done' : 'todo'} key={todo._id}>
                        <TodoItem todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} setShowConfetti={setShowConfetti} />
                    </div>
                ))}
            </div>
            : ''}
    </div>



}

import React from 'react';


const TodoList = (props) => {
    const onDeleteClick = () => {
        props.setTodos(props.todos.filter(todo => todo.id !== props.id))
    }
    const onCompleteClick = () => {

        props.setTodos(props.todos.map(todo => {
            if (todo.id === props.id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        }))
    }
    return (
        <div className="todo-item">
            <li className="list-group-item">
                <span className={`todo-value w-5 ${props.todo.completed ? "completed":''}`}>{props.text}</span>
                <div className="wrapper">
                    <button type="button" onClick={onCompleteClick} className="btn btn-info button-align mr-5"> Completed </button>
                    <button type="button" onClick={onDeleteClick} className="btn btn-danger button-align"> Delete </button>
                </div>
            </li>
        </div>
    );
}

export default TodoList;
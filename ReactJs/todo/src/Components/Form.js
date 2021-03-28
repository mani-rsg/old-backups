import React from 'react';
import TodoList from './TodoList';
const Form = (props) => { // function component

    const InputChangeHandler = (event) => {
        console.log(event.target.value);
        props.setInputValue(event.target.value);
    }
    const onSubmitClick = () => {
        props.setTodos([...props.todos, { text: props.inputText, id: Math.random() * 10000, completed: false }])
        props.setInputValue("");
    }

    const onSelectChange=(event)=>{
        props.setSelect(event.target.value);
    }

    return (
        <div className="container mt-4">
            <h2>ADD LISTS</h2>
            <div className="list-section d-flex mt-4">
                <input type="text" value={props.inputText} onChange={InputChangeHandler} className="form-control w-25" />

                <button type="submit" onClick={onSubmitClick} className="btn btn-primary ml-3 mb-2"> Submit </button>

                <select name="todos" onChange={onSelectChange} className="filter-todo selectOption selectPicker">
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Incomplete">Incomplete</option>
                </select>
            </div>
            <ul className="list-group">
                {
                    (props.filtered).map(todo => (
                        <TodoList
                            key={todo.id}
                            text={todo.text}
                            id={todo.id}
                            todos={props.todos}
                            setTodos={props.setTodos}
                            todo={todo}
                        />
                    ))
                }

            </ul>
        </div>
    )
}

export default Form;
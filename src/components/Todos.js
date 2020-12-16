import React from 'react';
import Todo from './todo';

const Todos = (props) => {
    return (
        <div className="todo-list">
                {props.filteredstate.map((todoobj) => (
                    <Todo text={todoobj.text} key={todoobj.id} setTodo={props.setTodo} todoobj={todoobj} todo={props.todo}/>
                ))}

        </div>
    );
}

export default Todos;
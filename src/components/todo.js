import React from 'react';

const Todo = (props) => {

    const deleteHandler=()=>{
        props.setTodo(props.todo.filter((el)=> el.id!==props.todoobj.id));
    }

    const completeHandler=()=>{
        props.setTodo(
            props.todo.map(item=>{
                if(item.id===props.todoobj.id){
                    return{
                        ...item,
                        completed : !item.completed
                    }
                }
                return item;
            })
        );
    }

    return (
        <div className={`todo-div ${props.todoobj.completed ? "completed" : ""}`}>
            <li className="todo-content">{props.text}</li>
            <button className="sel-btn" onClick={completeHandler} ><i className="fas fa-check"></i></button>
            <button className="del-btn" onClick={deleteHandler}><i className="fas fa-trash" ></i></button>
        </div>
    );
}

export default Todo;
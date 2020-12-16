import React from 'react';

const Inputfield = (props) => {

    const getInputdata = (e) => {
        props.setInputdata(e.target.value);
    }
    const getTodo = (e) => {
        e.preventDefault();
        props.setTodo([
            ...props.todo, { text: props.inputdata, completed: false, id: Math.random() * 1000 }
        ]);
        console.log(props.todo);
        props.setInputdata("");
    }

    const statusHandler=(e)=>{
        props.setStatus(e.target.value);
    }

    return (
        <div className="input-div">
            <form className="input-form" onSubmit={getTodo}>
                <input value={props.inputdata} type="text" className='input-bar' onChange={getInputdata} />
                <button className='input-btn'> <i className="fas fa-plus-square" ></i></button>
            </form>
            <select onChange={statusHandler} className="filter">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="notcompleted">Not Completed</option>
            </select>
        </div>
    );
}

export default Inputfield;
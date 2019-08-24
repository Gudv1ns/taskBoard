import React from 'react';
import './Task.css';
import Delete from './remove.png';
import Edit from './edit.png'

const Task = (props) => {
    return (
        <li className= 'Task'>
            <input type='checkbox' onChange= { props.checkTask }/>
            <span>
                { props.task.task }
            </span>
            <div>
                <img className='removeTask' src= { Delete } onClick= { props.deleteTask } />
                <img className='editTask' src= { Edit } onClick= { props.editTask } />
            </div>
        </li>
    )
}

export default Task;
import React from 'react';
import './Board.css';
import Task from '../Task/Task.js'
import Delete from './delete.png'
import Add from './Add.png'
import Edit from './edit.png'

const Board = (props) => {
    return (
        <div className= 'Board'>
            <div className= 'boardName'>
                <span> { props.item.boardName } </span>
                <img src= { Add } onClick= { props.addTaskOnBoard } className='btnAdd'/>
            </div>
            <React.Fragment>
                <ul className= 'taskList'>
                    { props.item.taskBoard.map((i, index) => {
                        return (
                            <Task
                                key= { i.id }
                                editTask = { () => props.editTask(i, props.item.taskBoard) }
                                deleteTask = { () => props.deleteTask(props.item.taskBoard, index) }
                                task= { i }
                                checkTask= {() => props.checkTask(i,props.item.taskBoard)}
                            />
                        )
                    }) }
                </ul>
            </React.Fragment>
            <div className= 'Btn'>
                <img className= 'btnEdit' src= { Edit } onClick = { props.editBoard } />
                <img className= 'btnDel' src= { Delete } onClick= { props.deleteBoard } />
            </div>
        </div>
    )
}

export default Board;
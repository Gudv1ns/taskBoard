import React from 'react';
import Board from '../Board/Board';

const BoardsList = (props) => {
    return (
        <div className= 'mainBody'>
            { props.boardsList.map((item, index) => {
                return (
                    <Board 
                        item= { item }
                        itemName= {  item.boardName }
                        key= { item.id }
                        addTaskOnBoard= { () => props.addTaskOnBoard(item) }
                        deleteBoard= { () => props.deleteBoard(item) }
                        editBoard= { props.editBoard }
                        task= { item.taskBoard }
                        editTask= { props.editTask }
                        deleteTask= { props.deleteTask }
                        checkTask= { props.checkTask }
                    />   
                )
            }) }
        </div>
    )
}

export default BoardsList;
import React from 'react';
import './Blackout.css';

const Blackout = (props) => {

return (
    <div className= 'Blackout'>
        <div className= 'newBoard'>
            <input onChange= { props.handleChange } placeholder= 'Enter name board...' type= 'text'/>
            <button onClick= { props.handleSubmit }>Add</button>
            <button onClick= { props.Cansel }> Censel</button>
        </div>
    </div>
    );
};

export default Blackout;
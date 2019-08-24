import React from 'react';
import './Header.css';
import igmUser from './img/user.png'
import logo from './img/logo.png'
import Add from './img/Add.png'

const Header = (props) => {
    return (
        <div className= 'Header'>
            <img className= 'logo' src= { logo }/>
            <button className= 'addBtn' onClick= { props.addNewBoard }> <img src={ Add }/>Add new board</button>
            <input className= 'searthField' type='text' placeholder='Search board...'/>            
            <button className= 'delBtn' onClick= { props.deleteAllBoard }>Delete all boards</button>
            <img className= 'imgUser'  src= { igmUser } alt= 'userImg'/>
        </div>
    );
};

export default Header;
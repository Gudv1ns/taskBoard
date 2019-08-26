import React,{Component} from 'react';
import BoardsList from './Components/BoardsList/BoardsList.js';
import Header from './Components/Header/Header.js';
import Blackout from './UI/Blackout/Blackout.js';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            boards:[],
            newBoard: false,
            nameBoard: '',
            newTask: '',
        };
    }

    addNewBoard = () => {
        this.setState({
            newBoard: true,
        });
        if(this.state.nameBoard === '') {
            return;
        } else {    
            const newBoard = {
                id: this.idGenerator(),
                boardName: this.state.nameBoard,
                taskBoard: [],
            };
            this.setState({
                boards: [newBoard, ...this.state.boards],
                nameBoard: '',
            });
        }
    };
    
    addTaskOnBoard = (item) => {
        const { boards } = this.state;
        const requestTask = prompt();

        const newTask = {
            id: this.idGenerator(),
            task: requestTask,
            checked: false,
        }

        item.taskBoard.push(newTask);
        this.setState({
            boards
        })
    }

    deleteAllBoard = () => {
        this.setState({
            boards: [],
        });
    }

    deleteBoard = (item) => {
        const {boards} = this.state;
        this.setState({
            boards: boards.filter(next => next.id !== item.id),
        });
    }

    idGenerator() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
            return v.toString(16);
          });
    }

    handleChange = event => {
        this.setState({
            nameBoard: event.target.value,
        });
    };

    handleSubmit = () => {
        this.setState({
            newBoard: false,
            boards: this.state.boards,
        });

        this.addNewBoard();
        this.setState({
            newBoard: false,
        })
    }

    Cansel = () => {
        this.setState({
            newBoard: false,
            nameBoard: '',
        });
    }

    deleteTask = (list, index) => {
        list.splice(index, 1);
        this.setState({
            boards: this.state.boards,
        })
    }

    editTask = (task, list) => {
        const {boards} = this.state;
        list.map(i => {
            i.id === task.id ? i.task = prompt(): console.log('Edit task');
            this.setState({
                boards,
            })
        })
    }

    checkTask = (task, list) => {
        const {boards} = this.state;
        console.log(task);
        console.log(list)
        list.map(i => {
            return  i.id === task.id ? i.checked !== i.checked : console.log(task);
        })
        this.setState({
            boards
        })
    }

    render() {
        return (
            <div className= 'Wrapper'>
                <div className= 'appDiv'>
                    { this.state.newBoard ? 
                        <Blackout
                            handleChange = { this.handleChange }
                            handleSubmit = { this.handleSubmit }            
                            Cansel = { this.Cansel }
                        /> : 
                        null 
                    }
                    <Header
                        addNewBoard = { () => this.addNewBoard() }
                        handleChange = { () => this.handleChange() }
                        deleteAllBoard = { this.deleteAllBoard }
                    />
                    <BoardsList 
                        boardsList= { this.state.boards }
                        addTaskOnBoard= { this.addTaskOnBoard }
                        deleteBoard= { this.deleteBoard }
                        editBoard= { this.editBoard }
                        deleteTask= { this.deleteTask }
                        editTask= { this.editTask }
                        checkTask= { this.checkTask }
                    />
                </div>
            </div>
        );
    };
};

export default App;
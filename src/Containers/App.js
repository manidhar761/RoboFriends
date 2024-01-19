import React, { Component } from 'react';
import './App.css';

import CardList from '../Components/CardList';
// import { robots } from './robots';
import SearchBox from '../Components/SearchBox';
import Scrolle from '../Components/Scrolle';


class App extends Component {
    constructor()
    {
        super();
        this.state = {
            robots:[],
            searchfield:''
        };
    }
    componentDidMount()//without calling it works.
    {
        //this.setState({robots:robots});
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
           return response.json();
        }).then(users =>{
            this.setState({robots:users})
        })
    }
    onSearchChange=(event) =>{

           this.setState({searchfield: event.target.value});
            
           
    }
    render()
    {
        const fileredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length ===0)
        {
           return <h1 className='logo'>Loding</h1>
        }
        else {
        return(
            
           
            <div className='tc'>  
            <h1 className='logo'> Robot Friends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Scrolle>
            <CardList robots={fileredRobots}/>
            </Scrolle>
            </div>
            
        );
        }
    }
    
}


export default App;
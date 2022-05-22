import React, {Component} from 'react';
import CarrdArr from '../components/CarrdArr';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import "../index.css"
import Scroll from '../components/Scroll'
import ErrorBound  from "../components/ErrorBound";

class App extends Component{
    constructor(){
        super();
        this.state = {robot: robots, 
            Searchfield:""}

    }

    /*componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{return response.json()})
        .then(users =>{this.setState({robot: users})
         })
    }*/
    onSearchChange = (event)=>{
        this.setState({Searchfield: event.target.value})
        
    } 
    render(){
        const {robot,Searchfield} = this.state;
        const filteredRobots = robot.filter(elem =>{
            return(elem.name.toLocaleLowerCase().includes(Searchfield.toLocaleLowerCase()))
        })
        return (! robots.length) ?
            <h1>Loading..</h1> :
                (<div className='finalApp'>
                    <h1 id='textRobo'>RoboFriends</h1>
                    <SearchBox  sChange ={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBound>
                            <CarrdArr robots={filteredRobots}/>
                        </ErrorBound>
                        
                    </Scroll>
                </div>); 
    }
    
}
export default App;
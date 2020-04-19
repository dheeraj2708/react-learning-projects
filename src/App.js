import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  
    state = {
        persons : [
            {name:'Dheeraj', age:32},
            {name:'Shubham', age:24},
            {name:'Harsh', age:30}
        ],
        otheState : "Some Value",
        showPersons: false
    }

    changeNameHandler = (newName) => {
        // console.log('Button Clicked!')
        this.setState({
        persons : [
            {name: newName, age:30},
            {name:'Shubham', age:24},
            {name:'Harsh', age:32}
        ]
        })
    }

    inputChangeHandler = (event) => {
        this.setState({
        persons : [
            {name:'Dheeraj', age:30},
            {name:event.target.value, age:24},
            {name:'Harsh', age:32}
        ]
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons : !doesShow })
    }

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex,1);
        this.setState({persons:persons})
    }

    render() {

        // Inline Style
        const style = {
            backgroundColor:'#9ba018',
            font:'inherit',
            border:'1px solid blue',
            padding:'8px',
            margin: '0px 10px 10px'
        }

        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    {/* Method 1 for passing value */}
                    <button style={style} onClick={this.changeNameHandler.bind(this,'James Don')}>Switch Name</button>

                    {/* Method 2 for passing value - NOT RECOMMENDED */}
                    <button style={style} onClick={ () => this.changeNameHandler('Dheeraj Sharma') }>Switch Name2</button>
                    
                    {/* <Person 
                        name={this.state.persons[0].name} 
                        age={this.state.persons[0].age}/>
                    <Person 
                        changes={this.inputChangeHandler} 
                        click={this.changeNameHandler.bind(this,'DJRockzz')} 
                        name={this.state.persons[1].name} 
                        age={this.state.persons[1].age}> My Hobbie is : racing </Person>
                    <Person 
                        name={this.state.persons[2].name} 
                        age={this.state.persons[2].age}/>  */}

                    {/* Loop of Persons Array with map() */}
                    {this.state.persons.map((person, index) => {
                        return <Person 
                            click={ this.deletePersonHandler.bind(this,index) }
                            name={person.name} 
                            age={person.age} />
                    })}
                </div>
            )
        }

        // Create Element With JSX
        return (
            <div className="App">
                <h1>I am a react developer</h1>
                <p>Starting new app</p>
                <button style={style} onClick={this.togglePersonsHandler}>Switch Persons</button>
                {persons}
            </div>
        );
        // Create Element Without JSX with 'nested React.createElement'.
        // return React.createElement('div', {className:'App'} , React.createElement('h1', null, 'I am a react developer'));
    }
}

export default App;

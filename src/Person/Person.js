import React, {Component} from 'react'
import './Person.css'

// const person = (props) => {
//     return <p>My name is {props.name} and i am {props.age} year old.</p>
// }

class Person extends Component{
    render(){
        return (
            <div className="person">
                <p onClick={this.props.click} >My name is {this.props.name} and i am {this.props.age} year old.</p>
                <p> {this.props.children} </p>
                <input type="text" onChange={this.props.changes} value={this.props.name} />
            </div>
        )

    }
}

export default Person
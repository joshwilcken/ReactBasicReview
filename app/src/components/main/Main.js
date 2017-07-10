import React, {Component} from 'react';
import './main.css'

class Main extends Component {
    constructor(props){
        super(props)

        this.state = {
            kitties: ['Tom', 'Bernard', 'Archibald', 'Reginald'],
            kitty: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.addKitty = this.addKitty.bind(this)
    }

    handleChange(event) {
        this.setState({
            kitty: event.target.value
        })
        console.log(this.state.kitty)
    }

    addKitty(event) {
        this.setState({
            kitties: [...this.state.kitties, this.state.kitty]
        })
        
    }




    render() {
        const kittiesArray = this.state.kitties.map((kitty, i) => (
            <h2 key={i}> { kitty } </h2>
        ))
        return (
            <div className='main'>
                <input onChange={this.handleChange}/>
                <button onClick={this.addKitty}>Add Kitty</button>
                <div>{kittiesArray}</div>


            </div>
        )
    }
}

export default Main
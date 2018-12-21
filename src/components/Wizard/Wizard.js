import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export class Wizard extends Component{
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    handleChange = (key,val) => {
        this.setState({
            [key]: val
        })
    }

    addHouse = () => {
        const {name, address, city, state, zip} = this.state
        axios.post('/api/houses', {name, address, city, state, zip})
            .then(res => {
                this.setState(res.data)
            })
    }

    render(){
        return(
            <div>
                Wizard
                <Link to='/'>
                <button onClick={() => this.addHouse()}>Complete</button>
                </Link>
                <Link to='/'>
                <button>Cancel</button>
                </Link>
                <input onChange={e => this.handleChange(this.state.name, e.target.value)}/>
                <input onChange={e => this.handleChange(this.state.address, e.target.value)}/>
                <input onChange={e => this.handleChange(this.state.city,e.target.value)}/>
                <input onChange={e => this.handleChange(this.state.state, e.target.value)}/>
                <input onChange={e => this.handleChange(this.state.zip, e.target.value)}/>
            </div>
        )
    }
}
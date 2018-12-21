import React, {Component} from 'react'
import {Link} from 'react-router-dom'

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

    render(){
        return(
            <div>
                Wizard
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
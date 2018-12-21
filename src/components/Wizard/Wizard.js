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
        console.log(key, val)
        this.setState({
            [key]: val
        })
    }

    addHouse = () => {
        const {name, address, city, state, zip} = this.state
        console.log(this.state)
        axios.post('/api/houses', {name, address, city, state, zip})
            .then(res => {
                console.log(res.data)
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
                <span>Name:</span>
                <input type='text' onChange={e => this.handleChange('name', e.target.value)}/>
                <span>Address:</span>
                <input type='text' onChange={e => this.handleChange('address', e.target.value)}/>
                <span>City:</span>
                <input type='text' onChange={e => this.handleChange('city',e.target.value)}/>
                <span>State:</span>
                <input type='text' onChange={e => this.handleChange('state', e.target.value)}/>
                <span>Zip:</span>
                <input type='text' onChange={e => this.handleChange('zip', e.target.value)}/>
            </div>
        )
    }
}
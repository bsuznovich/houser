import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'


export class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            houses: ['house','hoopty','blowe']
        }
    }

    componentDidMount(){
        axios.get('/api/houses').then(res => {
            // console.log(res.data)
            this.setState({
                houses: res.data
            })
        })
    }

    getHouses = () => {
        axios.get('/api/houses').then(res => {
            console.log(res)
            this.setState({
                houses: res.data
            })
        })
    }

    deleteHouse = (id) => {
        axios.delete(`/api/house/${id}`)
        .then(res => {
            this.setState({
                houses: res.data
            })
            this.getHouses()
        })
    }

    render(){
        let houseList = this.state.houses.map(house => {
            return(
                <div>
                    <House key={house.id}
                    id={house.id}
                    name={house.name}
                    address={house.address}
                    city={house.city}
                    state={house.state}
                    zip={house.zip}
                    img={house.img}
                    mortgage={house.mortgage} 
                    rent={house.rent}
                    deleteHouse={() => this.deleteHouse(house.id)}/>
                </div>
            )
        })
        return(
            <div>
                Dashboard
                <Link to='/wizard'>
                <button >Add New Property</button>
                </Link>
                {/* <House /> */}
                {houseList}
            </div>
        )
    }
}
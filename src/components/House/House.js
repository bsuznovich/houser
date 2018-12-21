import React from 'react'


export default function House(props){
    return(
        <div>
            <h1>House</h1>
            <p>{props.name}</p>
            <p>{props.address}</p>
            <p>{props.city}</p>
            <p>{props.state}</p>
            <p>{props.zip}</p>
            <button>Delete</button>
        </div>
    )
}
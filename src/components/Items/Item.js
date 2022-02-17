import React from 'react'

export default function Item(props) {
  return (

        <li className="border d-flex justify-content-between align-items-center p-2 m-2">
            <div className="p-3"> {props.txt} </div>
            <button
            onClick={ () => props.delfunc(props.id)}
             className="p-2 btn btn-danger h-50">suprimer</button>
        </li>


  )
}

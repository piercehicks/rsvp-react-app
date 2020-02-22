import React from 'react';

const Guest = props => 
    <li>
        <span>{props.name}</span>
            <label>
                <input 
                    type="checkbox" 
                    checked={props.isConfirmed}
                    onChange={props.handleConfirmation}
                    /> Confirmed
            </label>
        <button>edit</button>
        <button>remove</button>
    </li>;

export default Guest;
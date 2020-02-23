import React from 'react';
import GuestName from './GuestName';

const Guest = props => 
    <li>
        <GuestName isEditing={props.isEditing}>
            {props.name}
        </GuestName>
            <label>
                <input 
                    type="checkbox" 
                    checked={props.isConfirmed}
                    onChange={props.handleConfirmation}
                    /> Confirmed
            </label>
        <button onClick={props.handleToggleEditing}>edit</button>
        <button>remove</button>
    </li>;

export default Guest;
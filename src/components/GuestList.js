import React from 'react';
import Guest from './Guest';

const GuestList = props => 

    <ul>
    { props.guests.map((guest, index) => 
        <Guest 
            key={index}
            name={guest.name}
            isConfirmed={guest.isConfirmed}
            isEditing={guest.isEditing}
            handleConfirmation={() => props.toggleConfirmationAt(index)}
            handleToggleEditing={() => props.toggleEditingAt(index)}
        />
    )}
    </ul>;

export default GuestList;

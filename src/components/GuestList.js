import React from 'react';
import Guest from './Guest';

const GuestList = props => 

    <ul>
    { props.guests.map((guest, index) => 
        <Guest 
            key={index}
            name={guest.name}
            isConfirmed={guest.isConfirmed}
            handleConfirmation={() => props.toggleConfirmationAt(index)}
        />
    )}
    </ul>;

export default GuestList;

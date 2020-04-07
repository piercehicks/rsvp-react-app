import React from 'react';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = props => 
    <ul>
    <PendingGuest name={props.pendingGuest} />     
    { props.guests
    .filter(guest => !props.isFiltered || guest.isConfirmed)
    .map((guest, index) => 
        <Guest 
            key={index}
            name={guest.name}
            isConfirmed={guest.isConfirmed}
            isEditing={guest.isEditing}
            handleConfirmation={() => props.toggleConfirmationAt(index)}
            handleToggleEditing={() => props.toggleEditingAt(index)}
            setName={text => props.setNameAt(text, index)}
            handleRemove={() => props.removeGuestAt(index)}
        />
    )}
    </ul>;

export default GuestList;

import React from 'react';
import ticketImage from './../img/tickets-image.png';

const Header = () => {
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketImage} alt="Ticket" />
    </React.Fragment>
  );
}

export default Header;
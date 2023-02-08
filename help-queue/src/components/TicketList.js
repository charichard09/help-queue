import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.ticketList.map((e, i) => 
        <Ticket 
          names={e.names}
          location={e.location}
          issue={e.issue}
          key={i}/>
      )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  TicketList: PropTypes.array
};

export default TicketList;
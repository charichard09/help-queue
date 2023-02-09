import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.ticketList.map((e) => 
        <Ticket 
          whenTicketClicked = { props.onTicketSelection }
          names={e.names}
          location={e.location}
          issue={e.issue}
          id={e.id}
          key={e.id}
          />
      )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  TicketList: PropTypes.array,
  whenTicketClicked: PropTypes.func
};

export default TicketList;
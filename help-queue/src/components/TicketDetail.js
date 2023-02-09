import React from  'react' ;
import PropTypes from  'prop-types' ;

function TicketDetail(props) {
  // optional props desctructuring
  // const { ticket } = props;

  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{props.ticket.location} - {props.ticket.names}</h3>
      <p><em>{props.ticket.issue}</em></p>
      <button onClick={() => props.onClickingDelete(props.ticket.id)}>Close Ticket</button>
      <hr/>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default TicketDetail;
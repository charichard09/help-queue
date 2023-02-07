import React from 'react';
import Ticket from './Ticket';

const mainTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase will not save record! '
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Prop types are throwing an error. '
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Child component isn\'t rendering. '
  }
];

function TicketList() {
  return (
    <React.Fragment>
      <hr/>
      {mainTicketList.map((e, i) => 
        <Ticket 
          names={e.names}
          location={e.location}
          issue={e.issue}
          key={i}/>
      )}
    </React.Fragment>
  );
}

export default TicketList;
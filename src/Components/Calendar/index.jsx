import React from 'react';
import './index.scss';

import Calendar from 'react-calendar';

const CalendarComponent = ({ shadow }) => (
  <div className="Calendar__component" style={!shadow ? { boxShadow: 'none' } : {}}>
    <Calendar />
  </div>
);

export default CalendarComponent;

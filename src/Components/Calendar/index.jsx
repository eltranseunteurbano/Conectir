import React from 'react';
import './index.scss';

import Calendar from 'react-calendar';

const CalendarComponent = ({ onChangeValue, shadow }) => (
  <div className="Calendar__component" style={!shadow ? { boxShadow: 'none' } : {}}>
    <Calendar onChange={onChangeValue} />
  </div>
);

export default CalendarComponent;

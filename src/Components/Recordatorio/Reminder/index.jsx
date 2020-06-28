import React from 'react';
import './index.scss';

const Reminder = ({ date, text = '', last = false }) => (
  <div className={last ? 'Reminder Reminder-borderNone' : 'Reminder'}>
    <p className="Reminder__date">
      {' '}
      { date }
    </p>
    <p className="Reminder__text">{ text }</p>
  </div>
);

export default Reminder;

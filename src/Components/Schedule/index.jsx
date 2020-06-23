import React from 'react';
import './index.scss';

import CalendarSection from '../Calendar';
import Button from '../../Elements/Button';
import Recordatorio from '../Recordatorio';

const Schedule = () => (
  <div className="Schedule">
    <CalendarSection />
    <Button title="Prestar mi equipo" type="active" data="default" />
    <Recordatorio />
  </div>
);

export default Schedule;

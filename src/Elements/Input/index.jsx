import React from 'react';
import './index.scss';

const Input = ({
  title = 'Titulo', type = 'text', placeholder = 'Aquí va un mensaje', value, exportValue
}) => {
  const onChangeValue = (event) => {
    if (type === 'number') {
      exportValue(parseFloat(event));
    }

    exportValue(event);
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="Input">
      <p>{title}</p>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChangeValue(event.target.value)}
      />
    </label>
  );
};

export default Input;

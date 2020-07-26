import React from 'react';
import './index.scss';

const Input = ({
  title = 'Titulo',
  type = 'text',
  placeholder = 'Aquí va un mensaje',
  value, exportValue = () => { },
  defaultValue,
  name="",
  src = ""
}) => {

  const onChangeValue = (event) => {
    if (type === 'number') {
      exportValue(parseFloat(event));
    }

    exportValue(event);
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={"Input" + (type === "checkbox" ? " checkbox" : type === "image" ? " image" : "")}>
      {type === "checkbox" ?
        <>
          <input
            type={type}
            placeholder={placeholder}
            defaultValue={value}
            defaultChecked={defaultValue}
            onChange={(event) => onChangeValue(event)}
          />
          <p>{title}</p>
        </>
        :
        type === "image" ?
          <>
           
            <img src={src} alt="" />
            <input
              type="radio"
              name={name}
              placeholder={placeholder}
              defaultValue={value}
              defaultChecked={defaultValue}
              onChange={(event) => onChangeValue(event)}
            />
             <div className="background">
            </div>
            <p className="title">{title}</p>
          </>
          :
          <>
            <p>{title}</p>
            <input
              type={type}
              placeholder={placeholder}
              defaultValue={value}
              defaultChecked={defaultValue}
              onChange={(event) => onChangeValue(event.target.value)}
            />
          </>
      }

    </label>
  );
};

export default Input;

import React from 'react';

const TextField = (props) => {
  return(
    <div className="event-field-tile">
      <label>{props.label}
        <input
          name={props.name}
          onChange={props.onChange}
          type="text"
          value={props.content}
        />
      </label>
    </div>
  );
}

export default TextField;

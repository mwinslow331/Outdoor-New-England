import React from 'react';

const TextArea = (props) => {
  return(
    <div id="event-form" className="event-area-tile">
      <label>{props.label}
        <textarea
          name={props.name}
          onChange={props.onChange}
          value={props.content}
          rows={5}
        >
        </textarea>
      </label>
    </div>
    );
  }

export default TextArea;

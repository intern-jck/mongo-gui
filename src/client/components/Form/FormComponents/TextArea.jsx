import React from 'react';

const TextArea = ({id, name, rows, cols, value, changeHandler}) => {
  return (
    <label htmlFor='form-info'>
      {name}
      <textarea
        id={id}
        className='onclick'
        name={name}
        rows={rows}
        cols={cols}
        value={value}
        onChange={changeHandler}
      />
    </label>
  );
};

export default TextArea;

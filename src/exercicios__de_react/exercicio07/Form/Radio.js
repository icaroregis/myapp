import React from 'react';

export default function Radio({
  pergunta,
  options,
  onChange,
  value,
  id,
  active,
}) {
  if (active) {
    return (
      <fieldset style={{ marginBottom: '1rem' }}>
        <legend>{pergunta}</legend>
        {options.map((option) => {
          return (
            <label key={option} style={{ display: 'block', margin: '20px' }}>
              <input
                id={id}
                type="radio"
                checked={value === option}
                value={option}
                onChange={(e) => onChange(e)}
              />
              {option}
              {console.log(option, 'opções')}
            </label>
          );
        })}
      </fieldset>
    );
  }

  return '';
}

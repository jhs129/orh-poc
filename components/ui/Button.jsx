import React from 'react';

function Button ({ text, target }) {
  return (
    <button>
      <a href={target}>{text}</a>
    </button>
  );
};

export default Button;

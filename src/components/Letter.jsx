import React from 'react';
import PropTypes from 'prop-types';

function Letter(props) {
  return (
    <div>
      <span>{props.symbol}</span>
    </div>
  );
}

Letter.propTypes = {
  symbol: PropTypes.string.isRequired
};

export default Letter;

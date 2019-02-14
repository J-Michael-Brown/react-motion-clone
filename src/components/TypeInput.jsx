import React from 'react';
import PropTypes from 'prop-types';

function TypeInput(props){
  let _letterInput = null;

  function pushLetter(event) {
    event.preventDefault();
    console.log('pushLetter function entered')
    if(_letterInput.value) {
      props.onNewKeyPress(_letterInput.value);
      console.log(_letterInput.value);
    } else {
      console.log('no input recieved');
    }
    _letterInput.value = '';
  }
  return (
    <div>
      <input
        type='text'
        autoFocus='true'
        id='letterInput'
        onKeyDown={pushLetter}
        ref={(input) => {_letterInput = input;}}
      />
    </div>
  );
}

TypeInput.propTypes = {
  onNewKeyPress: PropTypes.func
}

export default TypeInput;

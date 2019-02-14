import React from 'react';
import Letter from './Letter';

const masterLetterList = [];

function LetterList() {
  return (
    <div>
      <ul>
        {masterLetterList.map((letter, index) =>
          <li>
            <Letter
              symbol={letter}
              key={index}
            />
          </li>
        )}
      </ul>
    </div>
  );
}

export { LetterList, masterLetterList };

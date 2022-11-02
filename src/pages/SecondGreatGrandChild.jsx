import React, {useContext} from 'react';
import {userContext} from './Parent';

export const SecondGreatGrandChild = () => {
  const countContext = useContext(userContext);
  const {dispatch} = countContext;
  return (
    <div>
      <h4>second great grand child</h4>
      <button
        className='border border-red-400 px-3 py-2 flex items-center bg-[#2a956d]'
        onClick={() => dispatch('clear')}
      >
        clear
      </button>
    </div>
  )
}


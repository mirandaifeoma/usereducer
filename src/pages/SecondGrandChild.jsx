import React, {useContext} from 'react';
import {SecondGreatGrandChild} from './SecondGreatGrandChild';
import { userContext } from './Parent';

export const SecondGrandChild = () => {
  const noticeContext = useContext(userContext);
  const { location, details} = noticeContext;

  
  return (
    <div>
      <h2 className='text-[blue] mt-7'>second grand child</h2>
      <a href='#' class='block'>
        <img
          alt='Lava'
          src='https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          class='h-56 w-[30%] rounded-xl object-cover shadow-xl'
        />
      </a>
      <SecondGreatGrandChild />
    </div>
  )
}


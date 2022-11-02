import React, { useContext } from 'react'
import { userContext } from './Parent'



export const FirstGreatGrandChild = () => {

  const countContext = useContext(userContext)
  console.log(countContext)
  const {dispatch} = countContext
  return (
    <div>
      <h4>first great grand child</h4>
      <button
        className='border border-red-400 px-3 py-2 flex items-center bg-[#164534]'
        onClick={() => dispatch({ type: 'inc', value: 5})}
      >
        +5
      </button>
      
    </div>
  )
}

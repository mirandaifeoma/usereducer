import React, {createContext, useReducer} from 'react';
import { ThirdChild } from './ThirdChild'

export const userContext = createContext()

const initialState = 20;

const reducer = (state, action) => {
  if(action === 'add') {
    return state + 1 
  }
  if (action === 'minus'){
    return state - 1
  }
  if (action === 'clear'){
    return initialState
  }
  if (action.type === 'inc') {
    return state + action.value
  }
  if (action.type === 'dec'){
    return state - action.value
  }
  return state 
}

export const Parent = () => {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <userContext.Provider value={{ count, dispatch }} >
      <h1 className='text-center text-[5vmin] '>Parent Component</h1>
      <div className='flex px-[3rem]'>
        <ThirdChild />
        <div className='w-[40%] bg-[gray] h-[20vh] text-center py-4 mt-[15rem]'>
          <h1 className=' mb-4'>
            Count: <span className='text-[red] text-xl'>{count}</span>
          </h1>
          <button
            className='bg-[#f6ff00] border-[none] py-2 px-6 m-2'
            onClick={() => dispatch('add')}
          >
            +
          </button>
          <button
            className='bg-[#00ff04] border-[none] py-2 px-6 m-2'
            onClick={() => dispatch('minus')}
          >
            -
          </button>
          <button
            className='bg-[#00b7ff] border-[none] py-2 px-6 m-2'
            onClick={() => dispatch('clear')}
          >
            reset
          </button>
          <button
            className='bg-[#0055ff] border-[none] py-2 px-6 m-2'
            onClick={() => dispatch({ type: 'inc', value: 10 })}
          >
            +10
          </button>
          <button
            className='bg-[#8400ff] border-[none] py-2 px-6 m-2'
            onClick={() => dispatch({ type: 'dec', value: 2 })}
          >
            -2
          </button>
        </div>
      </div>
    </userContext.Provider>
  )
}


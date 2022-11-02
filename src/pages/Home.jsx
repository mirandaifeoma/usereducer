import React, { useState, useEffect, useReducer } from 'react'

const url = 'https://jsonplaceholder.typicode.com/users'

const initialState ={
    post: null,
    error: false, 
    loading: true,
}

const reducer = (state, action) => {
    switch(action.type){
        case 'success':
            return{
                post:action.payload,
                error: false,
                loading: false,
            }
            break;

            case 'error':
                return{
                    post:null,
                    error: true,
                    loading: false,
                }
                break;

                default:
                    return state;
    }
}

const Home = () => {
  const [post, setPost] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch(url)
        .then(res => res.json())
      .then((res) => {
        console.log(res)
        setPost(res.json())
           setError(false)
           setLoading(false)
           dispatch({type:'success',payload:res.json()})
      })
      
      .catch((err) => {
        setPost(null)
        setError(true)
        setLoading(false)
        dispatch({type:'error'})
    console.log(err)

      })
  }
  if(error) return 'error....'
  else if (loading) return 'Loading'

  return (
    <div>
        {post}
      Home page
    </div>
  )
}

export default Home

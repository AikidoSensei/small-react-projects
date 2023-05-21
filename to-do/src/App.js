import logo from './logo.svg'
import './App.css'
import { useState, useReducer } from 'react'
import Modal from './Modal.js'

// REDUCER FUNCTION IS OUT OF THE COMPONENT SCOPE

const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    // const {id, todo} = action.payload;
    const newItems = [...state.toDo, action.payload]
    // console.log(action.payload)
    return {
      ...state,
      toDo: newItems,
      setShowModal: true,
      modalContent: 'Item Added',
    }
  }
  if (action.type === 'REMOVE_ITEM') {
    const removeList = state.toDo.filter((each) => {
      if (action.payload !== each.id) {
        return each
      }
    })
    return {
      ...state,
      toDo: removeList,
      setShowModal: true,
      modalContent: 'Item Removed',
    }
  }
  if (action.type === 'COMPLETED') {
    const newItems = state.toDo.map((each) => {
      if (action.payload === each.id) {
        each.strike = true
      }
      return each
    })
    return { ...state, toDo: newItems }
  }
  if (action.type === 'CLEAR_ALL') {
    console.log(state)
    return { toDo: [], setShowModal: false, modalContent: '' }
  }
}
const defaultState = {
  toDo: [],
  setShowModal: false,
  modalContent: '',
}

function App() {
  const [todo, setTodo] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleAdd = () => {
    const newItem = { id: new Date().getTime().toString(), todo, strike: false }
    dispatch({ type: 'ADD_ITEM', payload: newItem })
    setTodo('')
    console.log(state)
  }

  return (
    <div className='App'>
      <main className='container h-screen flex items-center justify-center backdrop-blur'>
        <section className='to-do-container bg-black/20 w-auto h-auto py-5 px-5 rounded-xl backdrop-blur-sm shadow-2xl relative'>
          {state.setShowModal && (
            <Modal closeModal={state.setShowModal} show={state.modalContent} />
          )}
          <div className='input-container space-x-[2rem] w-auto'>
            <input
              type='text'
              className=' px-3 w-80 h-8 rounded border-none outline-none bg-white/900 font-segoe'
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value)
              }}
            />
            <button
              className='py-2 px-5 bg-green-500/60 rounded-lg shadow-xl hover:bg-green-400/80 font-comic text-white'
              onClick={handleAdd}
            >
              <i className='fas fa-plus' />
            </button>
          </div>
          <ul className='list-container list-none px-0'>
            {state.toDo.map((each) => {
              const { id, todo } = each
              return (
                <li className='w-inherit  bg-white h-10 flex items-center justify-between mt-3  px-4'>
                  <h2
                    className={
                      each.strike ? 'font-comic line-through' : 'font-comic'
                    }
                  >
                    {todo}
                  </h2>
                  <div className='space-x-5'>
                    <i className='fas fa-edit text-yellow-400 cursor-pointer' />
                    <i
                      onClick={() => {
                        dispatch({ type: 'COMPLETED', payload: id })
                      }}
                      className='fas fa-check text-green-400 cursor-pointer'
                    />
                    <i
                      onClick={() => {
                        dispatch({ type: 'REMOVE_ITEM', payload: id })
                      }}
                      className='fas fa-trash text-red-500 cursor-pointer'
                    />
                  </div>
                </li>
              )
            })}
          </ul>
          <button
            onClick={() => {
              dispatch({ type: 'CLEAR_ALL' })
            }}
            className='bg-red-500 mt-4 px-4 py-1 rounded-xl ml-32 text-white font-comic'
          >
            clear all
          </button>
        </section>
      </main>
    </div>
  )
}

export default App

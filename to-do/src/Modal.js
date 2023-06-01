import React, { useEffect } from 'react'

function Modal({show, closeModal}) {
  useEffect(()=> {
    setTimeout(()=>{
      closeModal()
    }, 3000)
  })
  return (
    <div className=' modal-container bg-white w-fit ms-100 me-100 h-8 mt-10 py-1 px-3 rounded-xl backdrop-blur-sm shadow-2xl   text-white font-comic'>
      <div className='modal flex items-center'>
        <h2
          className={
            show === 'Item Added' || show === 'Task Completed'
              ? 'text-green-500'
              : show === 'Edit Item'
              ? 'text-yellow-500'
              : 'text-red-500'
          }
        >
          {show}
        </h2>
        <i
          onClick={() => closeModal()}
          className='fas fa-times text-red-500 flex justify-between px-2  ml-3 cursor-pointer hover:shadow-red-200 hover:shadow-md rounded-2xl'
        />
      </div>
    </div>
  )
}

export default Modal

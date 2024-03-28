import React from 'react'

export default function AddTransaction() {
  return (
    <>
       <h3>Add new transaction</h3>
        <form id='form'>
             <div className='form-control'> 
               <label for="text">Text</label> 
               <input type='text' id='text' placeholder='Enter text....'></input> 
             </div>
             <div className='form-control'>
                    <label for="smount">
        Amount <br/>
          (negative - expense , posetive - income)
                    </label>
                    <input type='number' id='amount' placeholder='Enter amount....'></input>
             </div>
        </form>
    </>
  )
}

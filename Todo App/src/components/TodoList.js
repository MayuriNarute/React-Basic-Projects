import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class todolist extends Component {
  render() {
    const {items, ClearList,handleDelete,handleEdit}=this.props

    return (
      <>
      <ul className='list-group my-5'>
        <h3 className='text-capitalize'> task list</h3><hr></hr>
        {items.map(item=>{
          return ( 
          <TodoItem key={item.id} title={item.title} 
          handleDelete={()=>handleDelete(item.id)}
          handleEdit={()=>handleEdit(item.id)}
          />

         )
          
          })}
        <button onClick={ClearList} type="button" className='btn btn-danger btn-block text-uppercase mt-5'>
          Clear List
        </button><br></br><hr></hr>
      </ul>
      </>
    )
  }
}

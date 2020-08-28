import React from 'react'
import TodoItem from './todoItem'

function TodoList(props) {

    const {items, handleReset, handleDelete, handleEdit} = props
    return (
        <div class="card mt-5">
          
            <div class="card-body">
            <h3 className ='text-capitalize text-center'>TODO LIST</h3>
                
            </div>
            <ul class="list-group ">
                {
                    items.map(item => {
                        return (
                            <TodoItem  key = {item.id} title = {item.title} handleDelete = {() => handleDelete(item.id)} handleEdit = {() => handleEdit(item.id)}/>
                        )
                    })
                }
              
               

               <button type='button' className = 'btn btn-danger btn-block textCapitalize mt-5' onClick = {handleReset} >
                   Clear List
               </button>
            </ul>
        </div>
            
            
           
            
        
    )
}

export default TodoList

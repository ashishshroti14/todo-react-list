import React from 'react'

function TodoItem(props) {

    const { title,handleDelete, handleEdit} = props
    return (
        
            
                    <li class="list-group-item text-capitalize d-flex justify-content-between my-2">
                        <h6>
                            {title}
                        </h6>
                        <div className = 'todo-icon'>
                            <span className= 'mx-2 text-success'><i class="fas fa-pen "  onClick ={handleEdit}></i></span>
                            <span className= 'mx-2 text-danger'><i class="fa fa-trash" aria-hidden="true" onClick =  {handleDelete} ></i></span>
                        </div>
                    </li>
                    
               
    )
}

export default TodoItem

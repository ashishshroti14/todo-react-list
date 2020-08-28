import React from 'react'

function TodoInput(props) {

  const {item, handleChange, handleSubmit, editItem} = props

  
    return (
        <div>
          <div class="card">
              <img class="card-img-top" src="holder.js/100x180/" alt=""/>
              <div class="card-body">
                 
                  <div class="form-group">
                    <label for=""></label>
                    <form onSubmit = {handleSubmit}>
                    <div class="input-group">
                        
                        <span class="input-group-btn">
                            <button type="button" class="btn btn-primary"   disabled = {true}><i class="fa fa-book" aria-hidden="true"></i></button>
                        </span>
                        <input type="text"
                      class="form-control " name="" id="" placeholder = 'add a todo item' value = {item.item} onChange={handleChange} aria-describedby="helpId" />
                    </div>
                  
    {  editItem ? <button type="submit" class="btn btn-block btn-success mt-3" >Edit Item</button> : <button type="submit" class="btn btn-block btn-primary mt-3" >Add Item</button> }

                  
                   {/* <button type="submit" class="btn btn-block btn-primary mt-3" >Add Item</button> */}
                   
                   </form>
                    
                   
                  
                  </div>
              </div>
          </div>
          </div>
       
    )
}
 
export default TodoInput

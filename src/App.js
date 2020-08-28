import React , {useState, useReducer} from 'react';
import logo from './logo.svg';
import TodoInput from'./components/todoInput'
import TodoList from './components/todoList';
import 'bootstrap/dist/css/bootstrap.min.css'
import {v1 as uuid} from 'uuid'


const initialState= {
  items: [],
  id:uuid(),
  item: '',
  editItem: false
}

function reducer(state, action) {
  switch(action.type){
    case 'update' :{
      console.log(state)
      
      // var prevItems = state.items
      // const updatedItems = prevItems.push({
      //   id: state.id,
      //   item: state.item
      // })
     
      return{
        items:[...state.items, {
          id: state.id,
          title: state.item
        

        }],
        item: '',
        id: uuid(),
        editItem: false
  
      }
      

    }
     

    case 'change' : 
    return {...state,
      item: action.payload
    }

    case 'edit' :
      return {
        ...state,
        items: action.payload.filteredItems,
        item: action.payload.editItem.title,
        id: action.payload.editItem.id,
        editItem : true 
      }

    case 'delete' :
      return {
        items: action.payload
      }

    case 'reset' :
      {
        return initialState
      }



    default: {
      return state
    }
  }
}





function App() {

  

 const [state, dispatch] = useReducer(reducer, initialState)
  

  const handleChange = (e) =>{
    
    // setstate({
    //   item: e.target.value
    // });

    dispatch({type: 'change', payload: e.target.value})
  
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
 

    // const newItem = {
    //   id: state.id,
    //   item: state.item
    // }



    // const updatedItems= [...state.items, newItem]

    // console.log(updatedItems)

    // setstate(prevState => {
    //   // const updatedItems= [...state.items, newItem]
    //   // console.log(updatedItems)
    //   return({
    //     items: [...state.items, newItem],
    //     item: '',
    //     id: uuid(),
    //     editItem: false
  
    //   })

    dispatch({type : 'update', payload: e.target.value})
      
    


  }

  const handleReset = () =>{
    dispatch({type: 'reset'})
  }


  const handleDelete = (id) => {
    const filteredItems = state.items.filter(item => id !== item.id ? item : null)
    dispatch({type: 'delete' ,payload : filteredItems })
  }

  const handleEdit = (id) => {
    const editItem =  state.items.find(item => id === item.id ? item : null)
    const filteredItems = state.items.filter(item => id !== item.id ? item : null)
    dispatch({type: 'edit', payload:{editItem:editItem, filteredItems } })
    
    
   
  }
  return (
    <div className="App">
      <div className= 'container'>
        <div className = 'row'>
          <div className = 'col-10 mx-auto col-md-8 mt-4'>
            <h3 className = 'text-capitalised text-center'>Todo</h3>
          <TodoInput item ={state} handleChange = {handleChange} handleSubmit = {handleSubmit} editItem = {state.editItem}/>
          <TodoList items = {state.items}  handleReset = {handleReset} handleDelete = {handleDelete} handleEdit = {handleEdit}/>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default App;

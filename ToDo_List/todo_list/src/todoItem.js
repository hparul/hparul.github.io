import React from 'react'

const ToDoItem = (props) => {

  const selectCheckBox = () => {
    console.log('selectCheckBox');
    console.log(props.shift.completed)
    props.shift.completed = !props.shift.completed;
    props.setShifts(prev => prev.filter((item) => item))
  }

  const editTodo = (value) => {
    console.log('editTodo');
    console.log(value);
    props.shift.description = value;
    props.setShifts(prev => prev.filter((item) => item))
  }

  const onDelete = () => {
    props.setShifts(prev => prev.filter((item) => item.id !== props.shift.id))
  }

  const onEdit = () => {
    console.log('onEdit');
    console.log(props.shift.editMode)
    props.shift.editMode = true;
    props.setShifts(prev => prev.filter((item) => item))
  }

  const onUpdate = () => {
    console.log('onUpdate');
    console.log(props.shift.editMode)
    props.shift.editMode = false;
    props.setShifts(prev => prev.filter((item) => item))
  }

  return (
    <li className='myList'>

      <label style={{
        textDecoration: props.shift.completed ? "line-through" : null,
        display: !props.shift.editMode ? "inline-block" : "none"
      }} >
        {props.shift.description} &nbsp; | &nbsp;
        {props.shift.deadline}
        &nbsp;
      </label>

      <input type="text" style={{ display: props.shift.editMode ? "inline-block" : "none" }} value={props.shift.description}
        onChange={(e) => editTodo(e.target.value)}></input>

      <input type="checkbox" onClick={(e) => {
        selectCheckBox(e);
      }} />

      <button onClick={onDelete}>Delete</button>
      <button style={{ display: !props.shift.editMode ? "inline-block" : "none" }} onClick={onEdit}>Edit</button>
      <button style={{ display: props.shift.editMode ? "inline-block" : "none" }} onClick={onUpdate}>Update</button>
    </li>


  )
}
export default ToDoItem;

import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { IoRemoveCircle } from "react-icons/io5";
import { useDispatch } from 'react-redux';

function AddOrDelete({AddForm,RemoveForm}) {
  const dispatch = useDispatch();

  const handleAddForm = () => {
    dispatch(AddForm());
  };

  const handleRemoveForm = () => {
    dispatch(RemoveForm());
  };

  return (
    <div className='AddOrDelete'>
        <i className='Add' onClick={handleAddForm}><FaCirclePlus /></i>
        <i className='Remove' onClick={handleRemoveForm}><IoRemoveCircle /></i>

    </div>
  )
}

export default AddOrDelete
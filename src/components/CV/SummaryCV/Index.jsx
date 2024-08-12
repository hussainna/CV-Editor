import React from 'react'
import { useSelector } from 'react-redux';

function SummaryCV() {
  const summary = useSelector((state) => state.form.summary);

  return (
    <div className='SummaryCV'>
        <h4>Summary</h4>
        <p>{summary}</p>
    </div>
  )
}

export default SummaryCV
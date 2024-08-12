import React from 'react'
import { useSelector } from 'react-redux';

function EducationCV() {
  const education = useSelector((state) => state.form.education);

  return (
    <div className='EducationCV my15'>
        <h4>Education</h4>
        {education.map((item,idx)=>(
          <div className="col" key={idx}>
            <h5>{item.name}</h5>
            <label htmlFor="">{item.degry}</label>
            <br />
            <span>{item.from}-</span>
            <span>{item.to}</span>
          </div>
        ))}
        

</div>
  )
}

export default EducationCV
import React from 'react'
import { useSelector } from 'react-redux';

function AdditionalCV() {

  const additional = useSelector((state) => state.form.additional);


  return (
    <div className='AdditionalCV my15'>
        <h4>Additional</h4>
        <p>
          {additional.map((item,idx)=>(
            <>{item.name}, </>

          ))}
          </p>

</div>
  )
}

export default AdditionalCV
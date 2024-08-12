import React from 'react'
import { useSelector } from 'react-redux';

function SoftCV() {
  const soft = useSelector((state) => state.form.soft);

  return (
    <div className='SoftCV my15'>
        <h4>Soft Skills</h4>
          <p>
          {soft.map((item,idx)=>(
            <>{item.name}, </>

          ))}
          </p>

</div>
  )
}

export default SoftCV
import React from 'react'
import { useSelector } from 'react-redux';

function LanguagesCV() {
  const languages = useSelector((state) => state.form.languages);

  return (
    <div className='LanguagesCV my15'>
        <h4>Languages</h4>
        <div className="grid-group">
        {languages.map((item,idx)=>(
            <span key={idx}>{item.name}</span>

          ))}

        </div>

</div>
  )
}

export default LanguagesCV
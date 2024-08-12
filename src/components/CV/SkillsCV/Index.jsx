import React from 'react'
import { useSelector } from 'react-redux';

function SkillsCV() {
  const skills = useSelector((state) => state.form.skills);

  return (
    <div className='SkillsCV'>
        <h4>Technical Skills</h4>
        <div className="grid-group">
          {skills.map((item,idx)=>(
            <span key={idx}>{item.name}</span>

          ))}
         

        </div>

</div>
  )
}

export default SkillsCV
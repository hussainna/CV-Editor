import React, { useRef } from 'react'
import CVTop from '../components/CVTop/Index'
import '../assets/style/CV/Style.scss'
import SummaryCV from '../components/CV/SummaryCV/Index'
import EducationCV from '../components/CV/EducationCV/Index'
import SkillsCV from '../components/CV/SkillsCV/Index'
import SoftCV from '../components/CV/SoftCV/Index'
import AdditionalCV from '../components/CV/AdditionalCV/Index'
import LanguagesCV from '../components/CV/LanguagesCV/Index'
import ExperienceCV from '../components/CV/ExperienceCV/Index'
function CV({componentRef}) {

  return (
    <div className='CV' ref={componentRef}>
      <CVTop/>
      <div className="CVLayouts">
        <div className="left">
          <SummaryCV/>
          <EducationCV/>
          <SkillsCV/>
          <SoftCV/>
          <AdditionalCV/>
          <LanguagesCV/>
        </div>
        <div className="right">
          <ExperienceCV/>
        </div>
      </div>
    </div>
  )
}

export default CV
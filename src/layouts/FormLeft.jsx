import React from 'react'
import '../assets/style/formLeft/style.scss'
import Downloads from '../components/Downloads'
import PersonalInformation from '../components/personal-informations/Index'
import SocialMedia from '../components/social-media/Index'
import AddOrDelete from '../components/AddOrDelete'
import Summary from '../components/Summary/Index'
import Education from '../components/Education/Index'
import Experience from '../components/Experience/Index'
import Skills from '../components/Skills/Index'
import Soft from '../components/Soft/Index'
import Additional from '../components/Additional/Index'
import Languages from '../components/Languages/Index'
import { addNewForm ,removeLastForm,addNewSocialMediaForm ,removeLastSocialMediaForm,addNewSkillsForm,removeLastSkillsForm,addNewSoftForm,removeLastSoftForm,addNewAdditionalForm,removeLastAdditionalForm,addNewLanguagesForm,removeLastLanguagesForm,addNewEducationForm,removeLastEducationForm} from '../settings/store';


function FormLeft() {
  return (
    <div className='FormLeft'>
        <Downloads/>
        <PersonalInformation/>
        <SocialMedia/>
        <AddOrDelete AddForm={addNewSocialMediaForm} RemoveForm={removeLastSocialMediaForm}/>
        <Summary/>
        <Education/>
        <AddOrDelete AddForm={addNewEducationForm} RemoveForm={removeLastEducationForm}/>
        <Experience/>
        <AddOrDelete AddForm={addNewForm} RemoveForm={removeLastForm}/>
        <Skills/>
        <AddOrDelete AddForm={addNewSkillsForm} RemoveForm={removeLastSkillsForm}/>
        <Soft/>
        <AddOrDelete AddForm={addNewSoftForm} RemoveForm={removeLastSoftForm}/>
        <Additional/>
        <AddOrDelete AddForm={addNewAdditionalForm} RemoveForm={removeLastAdditionalForm}/>
        <Languages/>
        <AddOrDelete AddForm={addNewLanguagesForm} RemoveForm={removeLastLanguagesForm}/>

    </div>
  )
}

export default FormLeft
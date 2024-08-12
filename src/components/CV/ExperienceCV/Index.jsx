import React from 'react'
import { useSelector } from 'react-redux';

function ExperienceCV() {
  const experiences = useSelector((state) => state.form.experiences);

  const ListText=(text)=>{

      // Split the text into sentences using the period as a delimiter
      const sentences = text.split('.');

      // Map over the sentences to create <li> elements, and filter out any empty or whitespace-only strings
      const listItems = sentences
        .map(sentence => sentence.trim())
        .filter(sentence => sentence.length > 0)
       .map(sentence => `<li>${sentence}.</li>`);

      // Wrap the list items in a <ul> element
      const unorderedList = `<ul>\n${listItems.join('\n')}\n</ul>`;

      return unorderedList
  }

  return (
    <div className='ExperienceCV'>
        <h4>Work Experience</h4>
        <div className="experience-group">
          {experiences.map((item,idx)=>(
            <div className="col" key={idx}>
            <h5>{item.companyTitle}</h5>
            <span>{item.companyJob}</span>
            <p>{item.companyDescription}</p>
  
            <div dangerouslySetInnerHTML={{ __html: ListText(item.companyList) }} />
            </div>
          ))}

        </div>
    </div>
  )
}

export default ExperienceCV
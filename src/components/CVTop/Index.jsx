import React from 'react'
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

function CVTop() {

  const formData = useSelector((state) => state.form);
  const SocialMedia = useSelector((state) => state.form.socialMedia);


  return (
    <div className='CVTop'>
      <div className="">

      <h2>{formData.name}</h2>
        <span>{formData.job}</span>
        <div className="flex">
            <div className="col">
                <i><IoIosCall/></i>
                <span>{formData.phone}</span>
            </div>
            <div className="col">
                <i><IoMdMail /></i>
                <span>{formData.email}</span>
            </div>
            <div className="col">
                <i><FaLocationDot /></i>
                <span>{formData.location}</span>
            </div>
        </div>

        <div className="flex">
          {SocialMedia?.map((item,idx)=>(
             <div className="col" key={idx}>
              <i>
                {item.name==='github'?(
                  <i><FaGithub/></i>
              ):item.name==='facebook'?(
                <i><FaFacebook/></i>
            ):item.name==='instagram'?(
              <i><CiInstagram/></i>
          ):item.name==='linkedin'?(
            <i><FaLinkedin/></i>
        ):""}
              </i>
                <span>{item.link}</span>
             </div>
          ))}
          
        </div>


      </div>
    </div>
  )
}


export default CVTop
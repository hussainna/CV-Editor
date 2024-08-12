import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setFormData,updateSocialMedia} from '../../settings/store';

function SocialMediaCreate() {

   const formData = useSelector((state) => state.form.socialMedia);
   const dispatch = useDispatch();

 
   // Define the validation schema using Yup
   const validationSchema = Yup.object().shape({
     name: Yup.string().required('Name is required'),
     link: Yup.string().required('Job is required'),

   });


  return (
   <div>

   {formData?.map((form,index)=>(
<Formik
initialValues={form}
key={index}
validationSchema={validationSchema}
onSubmit={(values) => {
dispatch(setFormData(values));
}}
enableReinitialize
validateOnChange={false} // Turn off default validation on change
>


{({ values, handleChange, handleBlur, errors, touched }) => (
<FormikForm>

<div className="form-control">
  <Field
    name="name"
    placeholder="Name"
    onChange={(e) => {
      handleChange(e);
      dispatch(updateSocialMedia({ ...values, name: e.target.value }));
    }}
    onBlur={handleBlur}
    value={values.name}
  />
  <ErrorMessage name="name" component="div" className="error" />

  <Field
    name="link"
    placeholder="Link"
    onChange={(e) => {
      handleChange(e);
      dispatch(updateSocialMedia({ ...values, link: e.target.value }));
    }}
    onBlur={handleBlur}
    value={values.link}
  />
  <ErrorMessage name="link" component="div" className="error" />

  
</div>



</FormikForm>

)}


</Formik>
   ))}
  
   {/* <form action="">
       <div className="form-control">
           <input type="text" name="" id="" />
       </div>
       <div className="form-control">
           <input type="text" name="" id="" />
       </div>
       <div className="form-control">
           <textarea type="text" name="" id="" />
       </div>
       <div className="form-control">
           <textarea type="text" name="" id="" />
       </div>
       <div className="form-control">
           <input type="date" name="" id="" />
           <input type="date" name="" id="" />

       </div>



       <div className="form-control">
           <input type="text" name="" id="" />
       </div>
       <div className="form-control">
           <input type="text" name="" id="" />
       </div>
       <div className="form-control">
           <textarea type="text" name="" id="" />
       </div>
       <div className="form-control">
           <textarea type="text" name="" id="" />
       </div>
       <div className="form-control">
           <input type="date" name="" id="" />
           <input type="date" name="" id="" />

       </div>



       <div className="form-control">
           <input type="text" name="" id="" />
       </div>
       <div className="form-control">
           <input type="text" name="" id="" />
       </div>
       <div className="form-control">
           <textarea type="text" name="" id="" />
       </div>
       <div className="form-control">
           <textarea type="text" name="" id="" />
       </div>
       <div className="form-control">
           <input type="date" name="" id="" />
           <input type="date" name="" id="" />

       </div>



   </form> */}
</div>
  )
}

export default SocialMediaCreate